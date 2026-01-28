import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/User.js';

dotenv.config();

const email = process.argv[2];
const password = process.argv[3] || '12345';

if (!email) {
  console.log('Usage: node create_user.js <email> [password]');
  process.exit(1);
}

const createUser = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB Connected');

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log(`User ${email} already exists. Updating password...`);
      existingUser.password = password;
      await existingUser.save();
      console.log('User password updated successfully.');
    } else {
      const user = new User({ email, password });
      await user.save();
      console.log(`User ${email} created successfully.`);
    }
    process.exit(0);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
};

createUser();
