import React from 'react';
import Image from 'next/image';

export default function InProgress() {
  return (
    <div className="flex justify-center items-center rounded-xl bg-in-progress-label p-4">
      <Image
        src="/assets/images/Time_atack_duotone.svg"
        width={20}
        height={20}
        alt="inProgress"
      />
    </div>
  );
}
