import express from 'express';
const router = express.Router();
import { authUser } from '../controllers/userController.js'; // .js extension is needed

router.post('/auth', authUser)

export default router;