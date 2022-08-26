import { Router } from 'express';
import {
  createTagController,
  deleteTagController,
  getTagController,
  getTagsController,
  updateTagController,
} from '../controller/tags.controller';
import userExtractor from '../middleware/userExtractor';

const router = Router();

router.get('/', getTagsController);

router.get('/:id', getTagController);

router.post('/', userExtractor, createTagController);

router.put('/:id', userExtractor, updateTagController);

router.delete('/:id', userExtractor, deleteTagController);

export default router;
