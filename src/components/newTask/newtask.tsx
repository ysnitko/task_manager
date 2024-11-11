import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function NewTask() {
  return (
    <div className="flex items-center gap-4 bg-add-bg w-full p-3 rounded-xl mt-3">
      <Link href={'/?show=true'} className="bg-add-btn-bg p-3 rounded-xl">
        <Image
          src="/assets/images/Add_round_duotone.svg"
          width={20}
          height={20}
          alt="add task"
        />
      </Link>
      <p className="text-sm font-bold">Add new task</p>
    </div>
  );
}
