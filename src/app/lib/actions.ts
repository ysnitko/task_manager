'use server';
import { Prisma, PrismaClient } from '@prisma/client';
import { connect } from 'http2';
import { title } from 'process';

const prisma = new PrismaClient();

export const createUser = async ({ userName }: { userName: string }) => {
  // const userEnterName = (await formData.get('user')) as string | null;
  const nameUser = await prisma.user.create({
    data: {
      name: userName,
    },
  });

  return nameUser.name;
};

export const getUser = async (userName: string) => {
  const user = await prisma.user.findUnique({
    where: {
      name: userName,
    },
  });
  return user?.id;
};

export const createTask = async (formData: FormData) => {
  // const userEnterName = (await formData.get('user')) as string | null;

  const taskName = formData.get('taskName') as string;
  const descriptionTask = formData.get('taskDescription') as string;
  const currentUser = formData.get('currUser') as string;
  // const iconPath = formData.get('password') as string;

  const findUser = await prisma.user.findUnique({
    where: {
      name: currentUser,
    },
  });
  console.log(findUser);

  const connectTask = {
    title: taskName,
    content: descriptionTask,
    src: '1',
    status: 'dsds',
    User: {
      connect: { id: findUser?.id },
    },
  };

  await prisma.task.create({
    data: connectTask as any,
  });
};
