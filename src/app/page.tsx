import NewTask from '@/components/newTask/newtask';
import Image from 'next/image';
import Task from '@/components/task/task';
import Modal from '@/components/modal/modal';
import CreateUsersForm from '@/components/createUsersForm/createUsersForm';

import { createUser, getUsersTask, getAllUsers, getUser } from './lib/actions';
import { SetStateAction } from 'react';

export default function Page() {
  // const enterName = async (formData: FormData) => {
  //   try {
  //     const userName = formData.get('user') as string;
  //     await createUser({ userName });
  //   } catch (error) {
  //     console.error('Error creating user:', error);
  //   }
  // };

  return (
    <div className="w-full">
      <CreateUsersForm />
      <div className="flex justify-between"></div>
      <ul>
        {/* {await getUsersTask().map((el) => {
          return (
            <li key={el.id}>
              <Task title={el.title} content={el.content} />
            </li>
          );
        })} */}
      </ul>
      {/* 
      <NewTask setAddTask={setAddTask} />
      {addTask && <Modal setAddTask={setAddTask} currentUser={currentUser} />} */}
    </div>
  );
}
