import Charts from "../components/Charts"
import Metrics from "../components/Metrics"
import Projects from "../components/Projects"
import Tasks from "../components/Tasks"

export const DashboardPage = () => {
  return (
    <section className="p-4">
        <h1 className="text-2xl text-red-700 font-bold">Dashboard</h1>
        <Metrics />
          <Charts />
          <Tasks />
          <Projects />
      </section>
  )
}
