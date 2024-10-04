import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <div className="flex flex-col w-full   ">
      <div className="flex gap-3  items-center  ">
        <Image
          src="/assets/images/Logo.svg"
          className="mt-3"
          width={40}
          height={40}
          alt="logo"
        />

        <p className="text-[40px]">My Task Board</p>

        <Image
          src="/assets/images/Edit_duotone.svg"
          width={20}
          height={20}
          alt="edit"
        />
      </div>
      <p className="text-base ml-14">Tasks to keep organised</p>
    </div>
  );
}
