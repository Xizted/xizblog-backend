import { Router } from 'express';
import postsRoutes from './posts.routes';
import authRoutes from './auth.routes';
const router = Router();

router.use('/auth', authRoutes);
router.use('/posts', postsRoutes);

export default router;
