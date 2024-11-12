import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

interface TaskProps {
  title: string | null;
  content: string | null;
  srcImg?: string | null;
}

export default function Task({ title, content, srcImg }: TaskProps) {
  return (
    <Link
      href="/"
      className="flex items-center gap-4 bg-add-bg w-full p-3 rounded-xl justify-between"
    >
      <div className="flex gap-4">
        <Image src={srcImg || ''} width={40} height={40} alt="add task" />
        <div>
          <p className="w-full text-xl">{title}</p>
          <p className="text-base">{content}</p>
        </div>
      </div>
      <Image src={srcImg || ''} width={40} height={40} alt="add task" />
    </Link>
  );
}
