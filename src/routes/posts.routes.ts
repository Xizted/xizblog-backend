import { Router } from 'express';
import {
  createPostController,
  deletePostController,
  getPostController,
  getPostsController,
  updatePostController,
} from '../controller/posts.controller';
import userExtractor from '../middleware/userExtractor';

const router = Router();

router.get('/', getPostsController);

router.get('/:id', getPostController);

router.post('/', userExtractor, createPostController);

router.put('/:id', userExtractor, updatePostController);

router.delete('/:id', userExtractor, deletePostController);

export default router;
