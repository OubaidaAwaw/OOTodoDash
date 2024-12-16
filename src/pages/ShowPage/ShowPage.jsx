  // import css files
import './ShowPage.css'
  // import react hooks
import { useEffect } from 'react'
  // import reac redux hooks
import { useSelector } from 'react-redux'
  // import data from redux
import { res as response } from './../../states/slices/TodoListSlice'
  // import react router hooks
import { useNavigate } from 'react-router-dom'
  // import components
import BlockData from './BlockData/BlockData'
import BackBtn from './BackBtn/BackBtn'

export default function ShowPage() {
    // get res
  const res = useSelector(response)
    // get id
  const id = window.location.href.split('/').pop()
    // declare navigator 
  const navigateTo = useNavigate()
    // get todo by id from redux
  useEffect(() => {
    if(!id?.length === 24 || res.data?.length === 0)
      navigateTo("/")
  },[res])
  return (
    <div className='col gap30'>
      <BackBtn/>
      <p className="H4D">{res?.data[0]?.title}</p>
      {res?.data[0]?.content.length !== 0 && <BlockData/>}
      <p className="H4D">{res?.data[0]?.attachments}</p>
    </div>
  )
}
