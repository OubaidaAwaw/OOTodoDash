  // import css files
import './TodoContainer.css'

  // import components
import Todo from '../Todo/Todo'
import SkeletonTodo from './SkeletonTodo/SkeletonTodo'
import NoTodos from '../NoTodos/NoTodos'

  // import react redux hooks
import { useSelector } from 'react-redux'

  // import response data
import { IsLoading, res as response } from '../../states/slices/TodoListSlice'

export default function TodoContainer() {
    // get the res data
  const res = useSelector(response)
  const isLoading = useSelector(IsLoading)
  return (
    <section className="todosContainer col gap30">
      {!isLoading ?
        <>
        {res.data.length !== 0?
          res.data.map((obj,i) => <Todo key={Math.random()} data={obj}/> )
        :<NoTodos/>}
        </> 
      :<SkeletonTodo/>}
    </section>
  )
}