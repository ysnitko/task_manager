import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Task() {
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
        <p className="w-full text-xl">Task To Do</p>
        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis iste
          labore saepe assumenda, quod natus animi ea porro beatae officia
          quidem eos neque aspernatur
        </p>
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
