import Image from 'next/image';

export default function Modal() {
  return (
    <form className=" border-[1px] w-full max-w-[500px] h-full max-h-[600px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl p-4 flex flex-col justify-between ">
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
              <button className="bg-task-to-do rounded-lg p-3">
                <Image
                  src="/assets/images/person.svg"
                  width={20}
                  height={20}
                  alt="person"
                />
              </button>
              <button className="bg-task-to-do rounded-lg p-3">
                <Image
                  src="/assets/images/books.svg"
                  width={20}
                  height={20}
                  alt="books"
                />
              </button>
              <button className="bg-task-to-do rounded-lg p-3">
                <Image
                  src="/assets/images/cup.svg"
                  width={20}
                  height={20}
                  alt="cup"
                />
              </button>
              <button className="bg-task-to-do rounded-lg p-3">
                <Image
                  src="/assets/images/laptop.svg"
                  width={20}
                  height={20}
                  alt="laptop"
                />
              </button>
              <button className="bg-task-to-do rounded-lg p-3">
                <Image
                  src="/assets/images/think.svg"
                  width={20}
                  height={20}
                  alt="think"
                />
              </button>
              <button className="bg-task-to-do rounded-lg p-3">
                <Image
                  src="/assets/images/clock.svg"
                  width={20}
                  height={20}
                  alt="clock"
                />
              </button>
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
                  <div className="flex justify-center items-center rounded-xl bg-in-progress-label p-4">
                    <Image
                      src="/assets/images/Time_atack_duotone.svg"
                      width={20}
                      height={20}
                      alt="completed"
                    />
                  </div>

                  <p>In Progress</p>
                </div>
                <input
                  type="radio"
                  name="status"
                  id="inProgress"
                  value="inProgress"
                />
              </label>
              <label
                htmlFor="completed"
                className="flex justify-between border-[1px] border-task-to-do rounded-xl p-1 items-center"
              >
                <div className="flex items-center gap-1">
                  <div className="flex justify-center items-center rounded-xl bg-done-label p-4">
                    <Image
                      src="/assets/images/Done_round_duotone.svg"
                      width={20}
                      height={20}
                      alt="completed"
                    />
                  </div>
                  <p>Completed</p>
                </div>
                <input
                  type="radio"
                  name="status"
                  id="completed"
                  value="completed"
                />
              </label>
              <label
                htmlFor="wontToDo"
                className="flex  justify-between border-[1px] border-task-to-do rounded-xl p-1 items-center"
              >
                <div className="flex items-center gap-1 ">
                  <div className="flex justify-center items-center bg-wont-do-label rounded-xl p-4">
                    <Image
                      src="/assets/images/close_ring_duotone.svg"
                      width={20}
                      height={20}
                      alt="wontToDo"
                    />
                  </div>
                  <p>Won't do</p>
                </div>
                <input
                  type="radio"
                  name="status"
                  id="wontToDo"
                  value="wontToDo"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-end gap-2 text-white">
        <button className="bg-cancel-delete text-xs rounded-xl flex justify-center  items-center gap-2 px-2 py-1">
          <p>Close</p>
          <Image
            src="/assets/images/close_ring_duotone.svg"
            width={10}
            height={10}
            alt="done"
          />
        </button>
        <button className="bg-done-task text-xs flex gap-2 rounded-xl px-2 py-1 justify-center items-center">
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
