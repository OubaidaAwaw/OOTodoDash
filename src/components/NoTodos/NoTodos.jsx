  // import css files
import "./NoTodos.css"

  // import react router components
import { Link} from "react-router-dom"
export default function NoTodos() {
  return (
    <div className="noTodosContainer col gap20 center">
      <p className="H1">No To-Dos Avaliable</p>
      <Link to={"/new-to-do"} className="center H4D">Create New Todo</Link>
    </div>
  )
}
