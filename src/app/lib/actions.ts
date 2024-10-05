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

export const createTask = async (formData: FormData) => {
  // const userEnterName = (await formData.get('user')) as string | null;

  const title = formData.get('name') as string;
  const description = formData.get('taskDescription') as string;
  // const iconPath = formData.get('password') as string;
  const userStatus = formData.get('user-status') as string;
  const paymentStatus = formData.get('payment-status') as string;
  const amount = formData.get('amount') as string;
  const createdAt = new Date().toISOString() as string;
  const userData = {
    name: name,
    email: email,
    password: userPassword,
    userStatus: userStatus,
    paymentStatus: paymentStatus,
    amount: +amount,
    createdAt: createdAt,
  };

  const user = await prisma.user.findUnique({
    where: {
      name: userName,
    },
  });
  return user?.name;
};
