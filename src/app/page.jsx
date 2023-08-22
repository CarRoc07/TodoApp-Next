import TaskCard from "@/components/TaskCard";
import { prisma } from "@/libs/prisma"

async function loadTasks() {
  return await prisma().task.findMany()
} 

export default async function Home() {

  const tasks = await loadTasks();

  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-3 gap-3 px-3 mt-8">
        {
          tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))
        }
      </div>
    </section>
  )
}
