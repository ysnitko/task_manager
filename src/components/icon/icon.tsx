import React from 'react';

export default function Icon({
  srcImg,
  idTask,
  getIconPath,
  selectedId,
}: {
  srcImg: string;
  idTask: number;
  selectedId: number | null;
  getIconPath: React.MouseEventHandler<HTMLInputElement>;
}) {
  const isSelected = selectedId === idTask;
  return (
    <input
      name="srcIcon"
      style={{
        backgroundImage: `url(${srcImg})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '70%',
      }}
      id={idTask.toString()}
      type="button"
      className={
        isSelected
          ? 'bg-task-to-do rounded-lg p-3 w-10 h-10 border-[1px] border-border-icon'
          : 'bg-task-to-do rounded-lg p-3 w-10 h-10 border-[1px]'
      }
      onClick={getIconPath}
    />
  );
}
