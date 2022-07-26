import { NextFunction, Request, Response } from 'express';
import { RequestWithuser } from '../interfaces/controller/auth.interface';
import { BodyRequestPost } from '../interfaces/controller/posts.interface';
import { PostSchema } from '../schema/controller/post.schema';
import {
  getPostsServices,
  getPostServices,
  createPostServices,
  updatePostService,
  deletePostService,
} from '../services/posts.services';

const getPostsController = async (req: Request, res: Response) => {
  const posts = await getPostsServices();
  return res.send(posts);
};

const getPostController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const post = await getPostServices(id);
  if (!post) return res.status(404).send({ message: 'Not found' });
  return res.send(post);
};

const createPostController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newPost = req.body as BodyRequestPost;
    PostSchema.parse(newPost);
    const id = parseInt((req as RequestWithuser).userData.id);
    await createPostServices(id, newPost);
    res.status(201).end();
  } catch (error) {
    next(error);
  }
};

const updatePostController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const post = req.body as BodyRequestPost;
    PostSchema.parse(post);
    const { id } = req.params;
    await updatePostService(id, post);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

const deletePostController = async (req: Request, res: Response) => {
  const { id } = req.params;
  await deletePostService(id);
  res.status(200).end();
};

export {
  getPostsController,
  getPostController,
  createPostController,
  updatePostController,
  deletePostController,
};
