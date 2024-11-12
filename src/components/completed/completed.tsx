import React from 'react';
import Image from 'next/image';

export default function Completed() {
  return (
    <div className="flex justify-center items-center rounded-xl bg-done-label p-4">
      <Image
        src="/assets/images/Done_round_duotone.svg"
        width={20}
        height={20}
        alt="completed"
      />
    </div>
  );
}
