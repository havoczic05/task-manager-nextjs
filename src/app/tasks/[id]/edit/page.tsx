import { TaskForm } from "@/app/new/task-form";
import prisma from "@/lib/prisma";

export default async function TaskPageEdit({ params }: {
  params: {
    id: string
  }
}) {

  console.log(params);

  const task = await prisma.task.findFirst({
    where: {
      id: parseInt(params.id)
    }
  })

  console.log(task);

  return (
    <div className="flex justify-center items-center h-screen">
      <TaskForm task={task}/>
    </div>
  )
}
