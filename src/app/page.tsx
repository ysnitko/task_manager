'use client';
import NewTask from '@/components/newTask/newtask';
import Image from 'next/image';
import Task from '@/components/task/task';
import Modal from '@/components/modal/modal';
import { useState, Dispatch, SetStateAction, useEffect } from 'react';
import { createUser, getUsersTask } from './lib/actions';

export default function Page() {
  const [addTask, setAddTask] = useState<boolean>(false);
  const [disableNameField, setDisableNameField] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<string>('');
  const [currTasks, setCurrTasks] = useState([getUsersTask]);

  const enterName = async (formData: FormData) => {
    try {
      const userName = formData.get('user') as string;
      await createUser({ userName });
      setDisableNameField(true);
      setCurrentUser(userName);
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };
  console.log(currTasks);

  return (
    <div className="w-full">
      <div className="flex justify-between">
        <form action={enterName} className="flex  items-center gap-2">
          <label htmlFor="user">
            <p>enter name</p>
          </label>
          <input
            type="text"
            name="user"
            id="user"
            className="border-[1px] border-add-btn-bg rounded-2xl px-2 text-sm"
            placeholder="name"
            disabled={disableNameField}
          />
          <button
            type="submit"
            className="w-4 h-4 rounded-full bg-add-btn-bg"
            disabled={disableNameField}
          >
            <Image
              src="/assets/images/Add_round_duotone.svg"
              width={16}
              height={16}
              alt="add user"
            />
          </button>
        </form>

        <p>
          current user: <span>{currentUser}</span>
        </p>
      </div>
      {currTasks.map((el) => {
        return <Task />;
      })}

      <NewTask setAddTask={setAddTask} />
      {addTask && <Modal setAddTask={setAddTask} currentUser={currentUser} />}
    </div>
  );
}
