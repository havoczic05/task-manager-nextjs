import { TaskForm } from "@/app/new/task-form";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

type Params = Promise<{ slug: string[] }>;
async function TaskPageEdit({ params }: {
  params: Params}) {


    const { slug } = await params;
  const task = await prisma.task.findFirst({
    where: {
      id: parseInt(slug[0])
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
export default TaskPageEdit
