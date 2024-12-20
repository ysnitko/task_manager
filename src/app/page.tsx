import NewTask from '@/components/newTask/newtask';
import Task from '@/components/task/task';
import Modal from '@/components/modal/modal';
import React from 'react';
import { getAllTasks } from './lib/actions';

type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined;
};

export default async function Page({ searchParams }: SearchParamProps) {
  const show = searchParams?.show;
  const detail = searchParams?.detail;
  const tasks = await getAllTasks();

  return (
    <div className="w-full">
      <ul className="mt-3 flex flex-col gap-3">
        {tasks.map((el) => {
          return (
            <li key={el.id}>
              <Task
                id={el.id}
                title={el.title}
                content={el.content}
                srcImg={el.src || ''}
                status={el.status}
              />
            </li>
          );
        })}
      </ul>
      <NewTask />
      {(show || detail) && <Modal detail={detail} />}
    </div>
  );
}
