import { Router } from 'express';
import postsRoutes from './posts.routes';
import authRoutes from './auth.routes';
import tagsRoutes from './tags.routes';
const router = Router();

router.use('/auth', authRoutes);
router.use('/posts', postsRoutes);
router.use('/tags', tagsRoutes);

export default router;
