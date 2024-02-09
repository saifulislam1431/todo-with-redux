import "./styles/bg.css"
import TodoContainer from "./components/TodoContainer/TodoContainer"
import AddTodo from "./components/AddTodo/AddTodo"
import TodoFilter from "./components/TodoFilter/TodoFilter"

function App() {

  return (
    <section className="max-w-7xl mx-auto min-h-screen section-background flex items-center justify-center">
      <div className="bg-white bg-opacity-65 px-16 py-10 rounded-md lg:w-3/4">
        <h1 className="text-3xl text-center font-bold">My Todo List</h1>

        <div className="w-full flex items-center justify-between my-10">
          <AddTodo />
          <TodoFilter />
        </div>

        <TodoContainer />
      </div>
    </section>
  )
}



export default App
