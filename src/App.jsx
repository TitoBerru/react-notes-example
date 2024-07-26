import TaskList from "./components/TaskList";
import TasksForm from "./components/TasksForm";

function App() {
  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
      <TasksForm />
      <TaskList />
      </div>
    </main>
  );
}

export default App;
