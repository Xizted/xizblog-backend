import { NextFunction, Request, Response } from 'express';
import { BodyRequestTag } from '../interfaces/controller/tags.interface';
import { TagSchema } from '../schema/controller/tag.schema';
import {
  createTagServices,
  deleteTagService,
  getTagServices,
  getTagsServices,
  updateTagService,
} from '../services/tags.services';

const getTagsController = async (req: Request, res: Response) => {
  const tags = await getTagsServices();
  return res.send({ data: tags });
};

const getTagController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const tag = await getTagServices(id);
  if (!tag) return res.status(404).send({ message: 'Not found' });
  res.status(302).send({ data: tag });
};

const createTagController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newTag = req.body as BodyRequestTag;
    TagSchema.parse(newTag);
    await createTagServices(newTag);
    res.status(201).end();
  } catch (error) {
    next(error);
  }
};

const updateTagController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const newTag = req.body as BodyRequestTag;
    TagSchema.parse(newTag);
    await updateTagService(id, newTag);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

const deleteTagController = async (req: Request, res: Response) => {
  const { id } = req.params;
  await deleteTagService(id);
  res.status(200).end();
};

export {
  getTagsController,
  getTagController,
  createTagController,
  updateTagController,
  deleteTagController,
};
