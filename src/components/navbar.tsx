import Link from "next/link"
import { ModeToggle } from "./theme-toggle-button"
import { buttonVariants } from "./ui/button"
function Navbar() {
  return (
    <nav className="flex justify-between pt-10 py-5 mb-4">
      <Link href="/">
        <h1
          className="text-xl font-bold text-gray-800 dark:text-gray-100"
        >
          Task Manager | Next.js, Prisma, Tailwind, ShadCN UI
        </h1>
      </Link>
      <div className="flex gap-x-2 items-center">
        <Link href="/new"
          className={buttonVariants({ variant: "secondary" })}
        >
          Create Task
        </Link>
        <ModeToggle />
      </div>

    </nav>
  )
}

export default Navbar
