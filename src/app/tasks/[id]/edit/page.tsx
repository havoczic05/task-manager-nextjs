import { TaskForm } from "@/app/new/task-form";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

type Params = Promise<{ id: string[] }>;
export default async function TaskPageEdit({ params }: {
  params: Params}) {


    const { id } = await params;
  const task = await prisma.task.findFirst({
    where: {
      id: parseInt(id[0])
    }
  })

  if (!task) {
    redirect("/")
  }


  return (
    <div className="flex justify-center items-center h-screen">
      <TaskForm task={task} />
    </div>
  )
}
