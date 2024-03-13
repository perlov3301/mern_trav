import express from 'express';
const router = express.Router();
// with ES syntax we have to notice entire name: name.js
import { authUser, authGet } from '../controllers/userController.js';

 // '/api/users' will be conect to the whole file userRoutes.js
router.post('/auth', authUser);
router.get('/auth',  authGet);

export default router;