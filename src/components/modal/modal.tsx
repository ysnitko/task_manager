'use client';
import Image from 'next/image';
import Link from 'next/link';
import Icon from '../icon/icon';
import Completed from '../completed/completed';
import WantToDO from '../wantToDo/wantToDo';
import InProgress from '../inProgress/inProgress';
import { ICONS } from '@/app/lib/store';
import { createTask } from '@/app/lib/actions';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getTask } from '@/app/lib/actions';
import { useSearchParams } from 'next/navigation';

export default function Modal({ detail }: { detail: string | undefined }) {
  const [pathIcon, setPathIcon] = useState<string>('');
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [status, setStatus] = useState<string>('inProgress');
  const [currName, setCurrName] = useState<string>('');
  const param = useSearchParams().toString().split('=');
  const router = useRouter();
  console.log(param);

  const taskId = +param[param.length - 1];
  console.log(taskId);

  const addTaskData = async (formData: FormData) => {
    try {
      await createTask(formData, pathIcon, status);
      router.back();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    const getCurrentNameTask = async (taskId: number) => {
      try {
        const currentNameTask = await getTask(taskId);
        setCurrName(currentNameTask);
      } catch (error) {
        console.log('Error', error);
      }
    };
    getCurrentNameTask(taskId);
  }, []);
  console.log(currName);

  const getIconPath = (event: React.MouseEvent<HTMLInputElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const targetElem = event.target as HTMLInputElement;
    const findPath = ICONS.find((item) => item.id === +targetElem.id);
    setPathIcon(findPath ? findPath.srcImg : '/assets/images/Logo.svg');
    setSelectedId(findPath ? findPath.id : null);
  };

  const getStatus = (event: React.ChangeEvent<HTMLInputElement>) => {
    const targetElem = event.target as HTMLInputElement;
    setStatus(targetElem.id);
  };

  return (
    <form
      className=" border-[1px] w-full max-w-[500px] h-full max-h-[600px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl p-4 flex flex-col justify-between "
      action={addTaskData}
    >
      <div className="flex flex-col gap-2">
        <p className="font-bold">Task details</p>
        <div className="flex flex-col gap-2">
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="taskName" className="text-sm text-cancel-delete">
              Task name
            </label>
            <input
              className="w-full border-[1px] border-task-to-do rounded-md p-1 text-sm"
              type="text"
              name="taskName"
              id="taskName"
              placeholder="task name"
              defaultValue={detail ? currName : ''}
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label
              htmlFor="taskDescription"
              className="text-sm text-cancel-delete "
            >
              Description
            </label>
            <textarea
              className="border-[1px] text-sm border-task-to-do w-full rounded-md p-1 resize-none"
              name="taskDescription"
              id="taskDescription"
              rows={5}
              placeholder="Enter a short description"
            ></textarea>
          </div>
          <div className=" w-full flex flex-col gap-2">
            <p className="text-cancel-delete text-sm">Icon</p>

            <div className="flex gap-1">
              {ICONS.map((item) => (
                <Icon
                  key={item.id}
                  srcImg={item.srcImg}
                  idTask={+item.id}
                  getIconPath={getIconPath}
                  selectedId={selectedId}
                />
              ))}
            </div>
          </div>
          <div className=" w-full flex flex-col gap-2">
            <p className="text-cancel-delete text-sm">Status</p>
            <div className="grid grid-cols-2 gap-1">
              <label
                htmlFor="inProgress"
                className="flex justify-between border-[1px] border-task-to-do rounded-xl p-1 items-center"
              >
                <div className="flex items-center gap-1 ">
                  <InProgress />
                  <p>In Progress</p>
                </div>
                <input
                  type="radio"
                  name="status"
                  id="inProgress"
                  value="inProgress"
                  checked={status === 'inProgress'}
                  onChange={(event) => getStatus(event)}
                />
              </label>
              <label
                htmlFor="completed"
                className="flex justify-between border-[1px] border-task-to-do rounded-xl p-1 items-center"
              >
                <div className="flex items-center gap-1">
                  <Completed />
                  <p>Completed</p>
                </div>
                <input
                  type="radio"
                  name="status"
                  id="completed"
                  value="completed"
                  checked={status === 'completed'}
                  onChange={(event) => getStatus(event)}
                />
              </label>
              <label
                htmlFor="wontToDo"
                className="flex  justify-between border-[1px] border-task-to-do rounded-xl p-1 items-center"
              >
                <div className="flex items-center gap-1 ">
                  <WantToDO />
                  <p>Won't do</p>
                </div>
                <input
                  type="radio"
                  name="status"
                  id="wontToDo"
                  value="wontToDo"
                  checked={status === 'wontToDo'}
                  onChange={(event) => getStatus(event)}
                />
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-end gap-2 text-white">
        <Link
          href={'/'}
          className="bg-cancel-delete text-xs rounded-xl flex justify-center  items-center gap-2 px-2 py-1"
        >
          <p>Close</p>
          <Image
            src="/assets/images/close_ring_duotone.svg"
            width={10}
            height={10}
            alt="done"
          />
        </Link>
        <button
          className="bg-done-task text-xs flex gap-2 rounded-xl px-2 py-1 justify-center items-center cursor-pointer"
          type="submit"
        >
          <p>Add task</p>
          <Image
            src="/assets/images/Done_round.svg"
            width={10}
            height={10}
            alt="done"
          />
        </button>
      </div>
    </form>
  );
}
