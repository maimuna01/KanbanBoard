import User from '../models/User.js';
import bcrypt from 'bcrypt';

// Login controller
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Return success message or token
    return res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    console.error('Error in loginUser:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

// Signup controller
export const signupUser = async (req, res) => {
  const { email, name, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create new user
    const newUser = new User({ email, name, password });
    await newUser.save();

    // Return success message or newly created user
    return res.status(201).json({ message: 'Signup successful', user: newUser });
  } catch (error) {
    console.error('Error in signupUser:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
