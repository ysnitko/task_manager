'use server';
import { Prisma, PrismaClient } from '@prisma/client';

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

  const userCur = await getUser(currentUser);
  console.log(userCur);

  const connectTask = {
    title: taskName,
    content: descriptionTask,
    src: '1',
    status: 'dsds',
    User: {
      connect: { id: userCur },
    },
  };

  await prisma.task.create({
    data: connectTask as any,
  });
};
