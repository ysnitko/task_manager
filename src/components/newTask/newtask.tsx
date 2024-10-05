import React from 'react';
import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';

interface NewTaskProps {
  setAddTask: Dispatch<SetStateAction<boolean>>;
}

export default function NewTask({ setAddTask }: NewTaskProps) {
  const showModal = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    event.preventDefault();
    setAddTask(true);
  };

  return (
    <div className="flex items-center gap-4 bg-add-bg w-full p-3 rounded-xl mt-3">
      <button className="bg-add-btn-bg p-3 rounded-xl">
        <Image
          src="/assets/images/Add_round_duotone.svg"
          width={20}
          height={20}
          alt="add task"
          onClick={(e) => showModal(e)}
        />
      </button>
      <p className="text-sm font-bold">Add new task</p>
    </div>
  );
}
