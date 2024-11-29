import TaskCard from "@/components/task-card";
import prisma from "@/lib/prisma"


export default async function HomePage() {
  const tasks = await prisma.task.findMany()

  return (
    <div className="grid grid-cols-3 gap-4">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />

      ))}
    </div>
  )
}
