import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, ClockIcon } from 'lucide-react'
import clsx from "clsx";
import { Task } from "@prisma/client";
import { TaskButtonDelete } from "./task-button-delete";
import Link from "next/link";

export default function TaskCard({ task }: { task: Task }) {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 pb-4">
        <CardTitle className="text-xl font-bold truncate">
          {task.name}
        </CardTitle>
        <Badge className={clsx("text-xs font-semibold px-3 py-1 rounded-full", {
          "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200": task.priority === "high",
          "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200": task.priority === "medium",
          "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200": task.priority === "low",
          "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200": task.priority === "urgent",
        })}>
          {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
        </Badge>
      </CardHeader>
      <CardContent className="pt-4">
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {task.description}
        </p>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <CalendarIcon className="w-4 h-4 mr-1" />
          <span>
            {new Date(task.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
          </span>
          <ClockIcon className="w-4 h-4 ml-4 mr-1" />
          <span>
            {new Date(task.createdAt).toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>
      </CardContent>
      <CardFooter className="flex gap-x-2 justify-end mt-3 bg-gray-50 dark:bg-gray-800 pt-4">
        <TaskButtonDelete taskId={task.id} />
        <Link href={`/tasks/${task.id}/edit`} className={buttonVariants({ variant: "secondary" })}>
          Edit
        </Link>
      </CardFooter>
    </Card>
  )
}
