import express from 'express';

const router = express.Router();
console.log('Auth routes loaded');

// Define your authentication routes
router.post('/login', (req, res) => {
  res.send('Login route');
});

router.post('/register', (req, res) => {
  res.send('Register route');
});

export default router; // Ensure it's exported as default
