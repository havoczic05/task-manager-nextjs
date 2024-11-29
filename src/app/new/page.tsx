import {TaskForm} from "./task-form"

function NewPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <TaskForm task={{ name: '', id: 0, description: null, priority: '', createdAt: new Date(), updatedAt: new Date() }} />
    </div>
  )
}

export default NewPage
