import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import InProgress from '../inProgress/inProgress';
import Completed from '../completed/completed';
import WantToDo from '../wantToDo/wantToDo';

type TaskProps = {
  id: number | null;
  title: string | null;
  content: string | null;
  srcImg?: string | null;
  status: string | null;
};

export default function Task({
  title,
  content,
  srcImg,
  status,
  id,
}: TaskProps) {
  return (
    <Link
      href={`/?detail=true&id=${id}`}
      className="flex items-center gap-4 bg-add-bg w-full p-3 rounded-xl justify-between"
      style={{
        backgroundColor:
          status === 'completed'
            ? '#A0ECB1'
            : status === 'inProgress'
            ? '#F5D565'
            : status === 'wontToDo'
            ? '#F7D4D3'
            : '',
      }}
    >
      <div className="flex gap-4">
        <Image src={srcImg || ''} width={40} height={40} alt="add task" />
        <div>
          <p className="w-full text-xl">{title}</p>
          <p className="text-base">{content}</p>
        </div>
      </div>
      {status === 'completed' && <Completed />}
      {status === 'inProgress' && <InProgress />}
      {status === 'wontToDo' && <WantToDo />}
    </Link>
  );
}
