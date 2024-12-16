  // import css files
import "./SearchBox.css"

  // import react hooks
import { useEffect, useState } from "react"

  // import react redux hooks
import { useDispatch } from "react-redux"

  // import the handlers from redux
import { FetchTodos, SearchTodo } from "../../../states/slices/TodoListSlice"

  // import react router hooks
import { useLocation } from "react-router-dom"

export default function SearchBox() {
    // declare the value of search
  const [searchText, setSearch] = useState("")
    // declare dipatch
  const dispatch = useDispatch()
  const location = useLocation()
  let segment = location.pathname.split("/").pop()
    // search handler
  async function SearchHandler(){
    try{
      segment = segment === ""? "todo" : segment
      if(searchText !== "" && searchText)
        await dispatch(SearchTodo({search:searchText, status:segment}))
      else 
        await dispatch(FetchTodos(segment))
    } catch(err) {
      console.error(err)
    }
  }
  useEffect(() => {
    SearchHandler()
  }, [searchText])
  return (
    <div className="searchBox gap10 center">
      <div onClick={SearchHandler} aria-labelledby="SearchHandler" name={'SearchHandler'} id="faSearchIco" role='button' className="center">
        <svg width={15} height={15} aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="faSearchIco"><path fill="currentColor" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path></svg>
      </div>
      <input 
        name="searchboxInput"
        autoComplete={"off"} 
        value={searchText} 
        onKeyDown={(e) => {e.key === "Enter"? SearchHandler() : console.log()}} 
        onChange={(e) => setSearch(e.target.value)} 
        placeholder={"Search..."} 
        className="inputSearch" 
        type="search"
      />
    </div>
  )
}