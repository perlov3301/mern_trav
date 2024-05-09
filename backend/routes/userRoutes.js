import express from 'express';
const router = express.Router();
// with ES syntax we have to notice entire name: name.js
import { authUser, 
         registerUser, logoutUser,
         getUserProfile, 
         updateUserProfile, 
     authGet } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

//router.use(cookieParser());
 // '/api/users' will be conect to the whole file userRoutes.js
router.post('/', registerUser);
router.post('/auth', authUser);
router.post('/logout', logoutUser);
// router.get('/profile', getUserProfile );
// router.put('/profile', updateUserProfile);
router.route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

export default router;