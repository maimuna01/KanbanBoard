import express from 'express';
import { loginUser, signupUser } from '../controllers/auth.js';

const router = express.Router();

// Routes for user authentication
router.post('/login', loginUser); // Route for user login
router.post('/signup', signupUser); // Route for user signup

export default router;
