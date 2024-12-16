  // import react compoennts and hooks
import  { Suspense, lazy, useEffect } from 'react'

//   // import redux hooks
import { useDispatch } from "react-redux"

//   // import redux data and methods
import { FetchTodos } from "./../../states/slices/TodoListSlice"

  // import components
const TodoContainer = lazy(() => import('../../components/TodoContainer/TodoContainer'))

export default function Bin() {
    // declear dispatch to apply function from redux
  const dispatch= useDispatch()
    // fetch data handler from redux for once
  useEffect(()=>{
    dispatch(FetchTodos("bin"))
  },[dispatch])
  return (<Suspense>
    <h1 className="H1">Bin List</h1>
    <TodoContainer/>
  </Suspense>)
}
