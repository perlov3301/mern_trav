import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/User.js';

const router = express.Router();
//user registration endpoint
router.post('/register',async (req,res)=>{
    try {
       const {username, password} = req.body;
       const hashedPassword = await bcrypt.hash(password, 10);
       const user = new User({username:username,password:hashedPassword});
       await user.save();
    } catch (error) {
        res.status(500).json({error: 'registration failed'});
      }
});
