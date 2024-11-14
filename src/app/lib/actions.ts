'use server';
import { Prisma, PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';

const prisma = new PrismaClient();

export const getAllTasks = async () => {
  const tasks: {
    id: number | null;
    src: string | null;
    title: string | null;
    content: string | null;
    status: string | null;
  }[] = await prisma.task.findMany();
  return tasks;
};

export const getIconSrc = async (src: string) => {
  return src;
};

export const createTask = async (
  formData: FormData,
  path: string,
  status: string
) => {
  const taskName = formData.get('taskName') as string;
  const descriptionTask = formData.get('taskDescription') as string;
  // const iconPath = formData.get('srcIcon') as string;

  const contextTask = {
    title: taskName,
    content: descriptionTask,
    src: path,
    status: status,
  };

  await prisma.task.create({
    data: contextTask,
  });
  revalidatePath('/');
};
