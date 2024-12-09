import TaskCard from "@/components/task-card";
import prisma from "@/lib/prisma"


export default async function HomePage() {
  const tasks = await prisma.task.findMany()

  return (
    <div className="grid  sm:grid-cols-1 mx-6 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />

      ))}
    </div>
  )
}
