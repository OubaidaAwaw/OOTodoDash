  // import react hooks
import { Suspense, lazy ,useEffect } from "react"

//   // import redux hooks
import { useDispatch } from "react-redux"

//   // import redux data and methods
import { FetchTodos } from "./../../states/slices/TodoListSlice"

// import components dynamically
const TodoContainer = lazy(() => import("./../../components/TodoContainer/TodoContainer"))

export default function TodoList() {
    // declear dispatch to apply function from redux
  const dispatch= useDispatch()
    // fetch data handler from redux for once
  useEffect(()=>{
    dispatch(FetchTodos('todo'))
  },[dispatch])
  return <Suspense> 
      <h1 className="H1">To-do List</h1>
      <TodoContainer/>
    </Suspense>
}