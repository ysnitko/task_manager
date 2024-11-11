import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

interface TaskProps {
  title: string | null;
  content: string | null;
  srcImg: string;
}

export default function Task({ title, content, srcImg }: TaskProps) {
  return (
    <Link
      href="/"
      className="flex items-center gap-4 bg-add-bg w-full p-3 rounded-xl justify-between"
    >
      <Image
        src="/assets/images/Logo.svg"
        width={40}
        height={40}
        alt="add task"
      />
      <div>
        <p className="w-full text-xl">{title}</p>
        <p className="text-base">{content}</p>
      </div>
      <Image src={srcImg} width={40} height={40} alt="add task" />
    </Link>
  );
}
