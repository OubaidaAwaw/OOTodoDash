  // import react compoennts and hooks
import { Suspense, lazy, useEffect } from 'react'

//   // import redux hooks
import { useDispatch } from "react-redux"

//   // import redux data and methods
import { FetchTodos } from "./../../states/slices/TodoListSlice"

// import components dynamically
const TodoContainer = lazy(() => import("./../../components/TodoContainer/TodoContainer"))

export default function Saved() {
      // declear dispatch to apply function from redux
  const dispatch= useDispatch()
    // fetch data handler from redux for once
  useEffect(()=>{
    dispatch(FetchTodos("saved"))
  },[dispatch])
  return (<Suspense>
    <h1 className="H1">Saved List</h1>
    <TodoContainer/>
  </Suspense>)
}
