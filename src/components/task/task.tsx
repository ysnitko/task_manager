import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface TaskProps {
  title: string;
  content: string;
}

export default function Task({ title, content }: TaskProps) {
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
      <Image
        src="/assets/images/Logo.svg"
        width={40}
        height={40}
        alt="add task"
      />
    </Link>
  );
}
