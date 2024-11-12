import React from 'react';
import Image from 'next/image';

export default function WantToDO() {
  return (
    <div className="flex justify-center items-center bg-wont-do-label rounded-xl p-4">
      <Image
        src="/assets/images/close_ring_duotone.svg"
        width={20}
        height={20}
        alt="wontToDo"
      />
    </div>
  );
}
