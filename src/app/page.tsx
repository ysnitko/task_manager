'use client';
import NewTask from '@/components/newTask/newtask';
import Task from '@/components/task/task';
import Modal from '@/components/modal/modal';
import { useState, Dispatch, SetStateAction } from 'react';

export default function Page() {
  const [addTask, setAddTask] = useState<boolean>(false);

  return (
    <div className="w-full">
      <Task />
      <NewTask setAddTask={setAddTask} />
      {addTask && <Modal />}
    </div>
  );
}
