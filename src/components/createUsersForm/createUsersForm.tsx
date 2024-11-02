'use client';
import Image from 'next/image';
import { useState } from 'react';
import { getUser } from '@/app/lib/actions';

export default function CreateUsersForm({
  children,
}: {
  children: React.ReactNode;
}) {
  const [show, setShow] = useState<Boolean>(false);

  return (
    <form className="flex  items-center gap-2">
      <div className="flex">
        <label htmlFor="selectUser">select user:</label>
        <select
          name="selectUser"
          id="selectUser"
          onChange={(event) => getUser(event.target.value)}
        >
          {/* {allUsers.map((el) => (
            <option key={el.id} value={el.name}>
              {el.name}
            </option>
          ))} */}
        </select>
      </div>
      <label htmlFor="user">
        <p>enter name</p>
      </label>
      <input
        type="text"
        name="user"
        id="user"
        className="border-[1px] border-add-btn-bg rounded-2xl px-2 text-sm"
        placeholder="name"
        // disabled={disableNameField}
      />

      <button
        type="submit"
        className="w-4 h-4 rounded-full bg-add-btn-bg"
        onClick={() => setShow(true)}
        // disabled={disableNameField}
      >
        <Image
          src="/assets/images/Add_round_duotone.svg"
          width={16}
          height={16}
          alt="add user"
        />
      </button>
      <p>
        current user: <span>{''}</span>
      </p>
    </form>
  );
}
