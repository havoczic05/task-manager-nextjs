import { TaskForm } from "@/app/new/task-form";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

type Params = Promise<{ id: string }>;
async function TaskPageEdit({ params }: {
  params: Params}) {

  const { id } = await params;
  console.log("The id returned from params is: ", id)
  if (!id ) {

    redirect("/")
  }

  const task = await prisma.task.findFirst({
    where: {
      id: parseInt(id, 10)
    }
  })

  if (!task) {
    // console.log("No task was found with the id: ", id)
    redirect("/")
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <TaskForm task={task} />
    </div>
  )
}
export default TaskPageEdit
