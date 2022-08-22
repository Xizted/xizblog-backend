import db from '../db/db';
import { BodyRequestPost } from '../interfaces/controller/posts.interface';

const getPostsServices = async () => await db.post.findMany({});

const getPostServices = async (id: string) =>
  await db.post.findFirst({
    where: {
      id: {
        equals: id,
      },
    },
  });

const createPostServices = async (userId: number, newPost: BodyRequestPost) =>
  await db.post.create({
    data: {
      userId,
      ...newPost,
    },
  });

const updatePostService = async (id: string, post: BodyRequestPost) =>
  await db.post.update({
    where: {
      id,
    },
    data: post,
  });

const deletePostService = async (id: string) =>
  await db.post.delete({
    where: {
      id,
    },
  });

export {
  getPostsServices,
  getPostServices,
  createPostServices,
  updatePostService,
  deletePostService,
};
