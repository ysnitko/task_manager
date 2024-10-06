'use server';
import { Prisma, PrismaClient } from '@prisma/client';
import { connect } from 'http2';

const prisma = new PrismaClient();

export const createUser = async ({ userName }: { userName: string }) => {
  // const userEnterName = (await formData.get('user')) as string | null;
  const nameUser = await prisma.user.create({
    data: {
      name: userName,
    },
  });
  console.log(nameUser.name);

  return nameUser.name;
};

export const getUser = async (userName: string) => {
  const user = await prisma.user.findUnique({
    where: {
      name: userName,
    },
  });
  return user?.name;
};

export const createTask = async (user: string, formData: FormData) => {
  // const userEnterName = (await formData.get('user')) as string | null;

  const taskName = formData.get('taskName') as string;
  const descriptionTask = formData.get('taskDescription') as string;
  // const iconPath = formData.get('password') as string;
  const userData = {
    name: taskName,
    description: descriptionTask,
  };

  const findUser = await prisma.user.findFirst({
    where: {
      name: user,
    },
  });

  const connectTask = {
    User: {
      connect: {
        name: findUser?.name,
      },
    },
  };

  await prisma.task.create({
    data: connectTask as any,
  });
};
