import NewTask from "@/components/newTask/newtask";
import Task from "@/components/task/task";

export default function Page() {
  return (
    <div className="w-full">
      <Task />
      <NewTask />
    </div>
  );
}
