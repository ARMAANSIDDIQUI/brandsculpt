import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';
import Image from './models/Image.js';
import User from './models/User.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key_change_this_in_production';

if (!process.env.MONGODB_URI) {
  console.error("CRITICAL ERROR: MONGODB_URI environment variable is missing!");
}

// Email Transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

// Middleware - CORS must be first to handle preflight checks
app.use(cors({
  origin: ['https://brandsculpt.vercel.app', 'http://localhost:3000'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

console.log('Server initializing...');

// Database Connection Strategy
let isConnected = false;

const connectDB = async () => {
  if (isConnected || mongoose.connection.readyState === 1) {
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 5000
    });
    
    isConnected = true;
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('MongoDB Connection Error:', error);
  }
};

// Middleware to ensure DB connection
app.use(async (req, res, next) => {
  await connectDB();
  next();
});

// Cloudinary Config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Multer Setup (Memory Storage)
const storage = multer.memoryStorage();
const upload = multer({ storage });

// --- Auth Middleware ---
const protect = async (req, res, next) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, JWT_SECRET);
      req.user = await User.findById(decoded.id).select('-password');
      next();
    } catch (error) {
      console.error(error);
      res.status(401).json({ success: false, error: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    res.status(401).json({ success: false, error: 'Not authorized, no token' });
  }
};

// --- Routes ---

app.get('/', (req, res) => {
  res.json({
    message: 'Brandsculpt Backend Running',
    dbStatus: mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected',
    dbStateCode: mongoose.connection.readyState
  });
});

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    dbState: mongoose.connection.readyState, // 0: disconnected, 1: connected, 2: connecting, 3: disconnecting
    dbName: mongoose.connection.name,
    env: {
      mongoUriConfigured: !!process.env.MONGODB_URI,
      cloudinaryConfigured: !!process.env.CLOUDINARY_CLOUD_NAME
    }
  });
});

// --- Auth Routes ---

// Login
app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Mongoose will throw here if not connected
    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
      res.json({
        success: true,
        token: jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '30d' }),
        user: {
          id: user._id,
          email: user.email,
          role: user.role
        }
      });
    } else {
      res.status(401).json({ success: false, error: 'Invalid email or password' });
    }
  } catch (error) {
     console.error("Login Error:", error);
     res.status(500).json({ success: false, error: error.message || "Server Error" });
  }
});

// Update Profile (Password)
app.put('/api/auth/profile', protect, async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.json({
      success: true,
      user: {
        id: updatedUser._id,
        email: updatedUser.email,
        role: updatedUser.role,
      },
    });
  } else {
    res.status(404).json({ success: false, error: 'User not found' });
  }
});

// Create Admin (Protected)
app.post('/api/auth/create-admin', protect, async (req, res) => {
  const { email, password } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ success: false, error: 'User already exists' });
    }

    const user = new User({ email, password });
    await user.save();

    res.status(201).json({
      success: true, 
      message: 'Admin created successfully',
      user: { id: user._id, email: user.email }
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});


// --- Image Routes ---

// Get All Images (with optional category filter)
app.get('/api/images', async (req, res) => {
  try {
    const { category } = req.query;
    const query = category ? { category } : {};
    const images = await Image.find(query).sort({ createdAt: -1 });
    res.json({ success: true, data: images });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Upload Image (Protected)
app.post('/api/upload', protect, upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, error: 'No file uploaded' });
    }

    // Upload to Cloudinary
    const b64 = Buffer.from(req.file.buffer).toString('base64');
    let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
    
    const result = await cloudinary.uploader.upload(dataURI, {
      folder: 'brandsculpt',
    });

    // Save to MongoDB
    const newImage = new Image({
      url: result.secure_url,
      publicId: result.public_id,
      alt: req.body.alt || 'Uploaded image',
      category: req.body.category || 'general',
    });

    await newImage.save();

    res.status(201).json({ success: true, data: newImage });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Upload failed' });
  }
});

// Delete Image (Protected)
app.delete('/api/images/:id', protect, async (req, res) => {
  try {
    const { id } = req.params;
    const image = await Image.findById(id);

    if (!image) {
      return res.status(404).json({ success: false, error: 'Image not found' });
    }

    // Optional: Delete from Cloudinary if needed
    if (image.publicId) {
        await cloudinary.uploader.destroy(image.publicId);
    }

    await Image.findByIdAndDelete(id);

    res.json({ success: true, message: 'Image deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Delete failed' });
  }
});

// Contact Form Route
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'Please provide name, email, and message.' });
  }

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: 'akhtarhannaan@gmail.com, armaansiddiqui.pms@gmail.com, connect.brandsculpt@gmail.com ', // Send to multiple recipients
    replyTo: email,
    subject: `Brandsculpt Contact: ${subject || 'New Message'}`,
    text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone || 'N/A'}
      
      Message:
      ${message}
    `,
    html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
      <br>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email Error:', error);
    res.status(500).json({ success: false, error: 'Failed to send email' });
  }
});

// Start server independent of DB connection status
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;