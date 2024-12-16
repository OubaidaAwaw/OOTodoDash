  // import css files
import './Todo.css'

  // import react hooks and components
import { useState } from 'react'

  // import components
import WhiteList from "./WhiteList/WhiteList"

  // import react redux hooks
import { useDispatch } from 'react-redux'

  // import handlers
import { DeleteTodo, GetTodoByID, UpdateTodo } from '../../states/slices/TodoListSlice'

  // import react router hooks
import { useNavigate } from 'react-router-dom'

export default function Todo({data}) {
    // main checkbox for done the todo or not
  const [isChecked , setChecked] = useState(data.status === "checked")
    // declare dispatch to apply the actions
  const dispatch = useDispatch()
    // declare navigation
  const navigateTo = useNavigate()
    // bin handler
  function BinHandler(){
    console.log("BinHandler") // for dev
    let status = "bin"
    if(data.status === "bin")
      status = "todo"
      // the updated data
    const UpdatedData = {
      status,
      id: data._id
    }
      // update the data
    dispatch(UpdateTodo(UpdatedData))
  }

    // cancel handler
  function CancelHandler(){
    console.log("CancelHandler") // for dev
      // delete the todo the data
    dispatch(DeleteTodo(data._id))
  }

    // check handler
  function CheckedHandler(){
    setChecked(prev => !prev)
    setTimeout(() => {
      let status = "checked"
      if(data.status === "checked")
        status = "todo"
        // the updated data
      const UpdatedData = {
        status,
        id: data._id
      }
        // update the data
      dispatch(UpdateTodo(UpdatedData))
    }, 200);
  }
    // Show Handler
  function ShowHandler () {
    if(data?._id){
      dispatch(GetTodoByID(data._id))
      navigateTo(`/${data._id}`)
    }
  }
    // bin handler
  function SaveHandler(){
    let status = "saved"
    if(data.status === "saved")
      status = "todo"
      // the updated data
    const UpdatedData = {
      status,
      id: data._id
    }
      // update the data
    dispatch(UpdateTodo(UpdatedData))
  }
  return (
    <div className={`${isChecked && "backColoring"} todo center row between`}>
      <div className="leftSecTodo row gap20">
        <WhiteList status={data.status} allow={["todo", "saved", "checked"]}>
          <input checked={data.status === "checked"} id={`${data._id}`} onChange={CheckedHandler} className='center checkboxChechInput' type="checkbox"/>
        </WhiteList>
        <p className={`H4D ${isChecked && "textColor"}`}>{data.title}</p>
      </div>
      <div className="rightSecTodo row gap20 center">
        <WhiteList status={data.status} allow={["todo", "saved"]}>
          <div className={`${isChecked && "LightBorderColor"} cancel center`}>
            <label className='center' aria-checked="false" role='checkbox' htmlFor={`cancelInput${data._id}`}>
              <svg  xmlns="http://www.w3.org/2000/svg" width="22" height="22">
                <path fill='#202224' strokeWidth={0} d="M21.83 11.442C21.653 11.179 17.441 5 12 5s-9.653 6.179-9.83 6.442L1.8 12l.374.558C2.347 12.821 6.559 19 12 19s9.653-6.179 9.83-6.442L22.2 12zM12 17c-3.531 0-6.664-3.59-7.758-5C5.336 10.59 8.469 7 12 7s6.664 3.59 7.758 5c-1.094 1.41-4.227 5-7.758 5z"/>
                <path fill='#202224' strokeWidth={0} d="M12 8a4 4 0 1 0 4 4 4 4 0 0 0-4-4zm0 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2z"/>
              </svg>
            </label>
            <input onChange={ShowHandler} type="checkbox" id={`cancelInput${data._id}`} />
          </div>
        </WhiteList>
        <WhiteList status={data.status} allow={["todo", "saved"]}>
          <div className="star">
            <input checked={data.status === "saved"} className='saveItStar' onChange={SaveHandler} type="checkbox"  id={`starInput${data._id}`} />
            <label role='checkbox' aria-checked="false" htmlFor={`starInput${data._id}`}>
              <svg className='saveStars' width="18" height="18" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className={`${isChecked && "LightStroke"}`} fillRule="evenodd" clipRule="evenodd" d="M14.8401 1.51507L18.7064 9.175L26.148 9.91222C26.5097 9.94228 26.8209 10.18 26.945 10.5211C27.0692 10.8622 26.9835 11.2444 26.7257 11.4999L20.6015 17.5698L22.8721 25.8179C22.967 26.1753 22.8434 26.5551 22.5564 26.7882C22.2694 27.0213 21.8724 27.0644 21.5421 26.8983L13.9977 23.1625L6.4637 26.8937C6.13337 27.0598 5.73633 27.0167 5.44934 26.7836C5.16236 26.5504 5.03881 26.1707 5.1337 25.8133L7.4043 17.5652L1.27543 11.4953C1.01761 11.2398 0.931977 10.8576 1.05611 10.5165C1.18023 10.1754 1.49144 9.93766 1.85319 9.90759L9.29472 9.17037L13.1553 1.51507C13.3172 1.1989 13.6425 1 13.9977 1C14.3529 1 14.6782 1.1989 14.8401 1.51507Z" stroke="#B3B3B3" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </label>
          </div>
        </WhiteList>
        <WhiteList status={data.status} allow={["todo", "saved"]}>
          <div className={`${isChecked && "LightBorderColor"} cancel center`}>
            <label className='center' aria-checked="false" role='checkbox' htmlFor={`cancelInput${data._id}`}>
              <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M16.25 19H5.75C4.92157 19 4.25 18.3284 4.25 17.5V4H17.75V17.5C17.75 18.3284 17.0784 19 16.25 19Z" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.75 14.5V8.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.25 14.5V8.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path className='rotationBin' d="M1.25 4H20.75" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path className='rotationBin' fillRule="evenodd" clipRule="evenodd" d="M13.25 1H8.75C7.92157 1 7.25 1.67157 7.25 2.5V4H14.75V2.5C14.75 1.67157 14.0784 1 13.25 1Z" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </label>
            <input onChange={BinHandler} type="checkbox" id={`cancelInput${data._id}`} />
          </div>
        </WhiteList>

        <WhiteList status={data.status} allow={["checked", "bin"]}>
          <div className="bin">
            <button onClick={data.status === "bin"? BinHandler: CancelHandler} type='button' className='binButton center'>
              <WhiteList status={data.status} allow={["checked"]}>
                <svg width="30" height="30" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M15.9993 15.1751L19.0869 12.0875C19.3147 11.8597 19.684 11.8597 19.9118 12.0875C20.1396 12.3153 20.1396 12.6847 19.9118 12.9125L16.8243 16L19.9118 19.0875C20.1396 19.3153 20.1396 19.6847 19.9118 19.9125C19.684 20.1403 19.3147 20.1403 19.0869 19.9125L15.9993 16.825L12.9118 19.9125C12.684 20.1403 12.3147 20.1403 12.0869 19.9125C11.8591 19.6847 11.8591 19.3153 12.0869 19.0875L15.1744 16L12.0869 12.9125C11.8591 12.6847 11.8591 12.3153 12.0869 12.0875C12.3147 11.8597 12.684 11.8597 12.9118 12.0875L15.9993 15.1751Z"/></svg>
              </WhiteList>
              <WhiteList status={data.status} allow={["bin"]}>
                <svg width={24} height={24} style={{rotate:"-45deg"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path style={{"fill":"green"}} d="M18 8.5V19a1 1 0 0 1-2 0V8.5a2.5 2.5 0 0 0-5 0v8.086l1.293-1.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-1.416 0l-3-3a1 1 0 0 1 1.414-1.414L9 16.586V8.5a4.5 4.5 0 0 1 9 0z" /></svg>
              </WhiteList>
            </button>
          </div>
        </WhiteList>
      </div>
    </div>
  )
}
