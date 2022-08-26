import db from '../db/db';
import { BodyRequestTag } from '../interfaces/controller/tags.interface';

const getTagsServices = async () => await db.tag.findMany({});

const getTagServices = async (id: string) =>
  await db.tag.findFirst({
    where: {
      id,
    },
  });

const createTagServices = async (newTag: BodyRequestTag) =>
  await db.tag.create({
    data: newTag,
  });

const updateTagService = async (id: string, newTag: BodyRequestTag) =>
  await db.tag.update({
    where: {
      id,
    },
    data: newTag,
  });

const deleteTagService = async (id: string) =>
  await db.tag.delete({
    where: {
      id,
    },
  });

export {
  getTagsServices,
  getTagServices,
  createTagServices,
  updateTagService,
  deleteTagService,
};
