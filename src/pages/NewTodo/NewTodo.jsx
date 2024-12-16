  // import css files
import './NewTodo.css'

// import redux hooks
import { useDispatch, useSelector } from 'react-redux'

// import react hooks and components
import { Suspense, lazy, useEffect, useRef, useState } from 'react'

// get the data form redux
import { CreateTodo, draft, SetDraft} from '../../states/slices/TodoListSlice'

// import components
import Alerting from '../../components/Alerting/Alerting'

  // import react router hook
import { useNavigate } from 'react-router-dom'

  // import components dynamically
const EditorToolbar = lazy(() => import('./components/Editor/EditorToolbar'))
const TitleInput = lazy(() => import('./components/TitleInput/TitleInput'))
const Attachments = lazy(() => import('./components/Attachments/Attachments'))

export default function NewTodo() {
    // get the draft
  const DraftTodo = useSelector(draft)
    // create ref for editor
  const RichTextBox = useRef()
    // declare dispatch
  const dispatch = useDispatch()
    // declare navigate
  const navigate = useNavigate()
    // Create Handler
  async function CreateHandler(e){
    try{
      const NewTodo = {
        title,
        attachments,
        content
      }
      await dispatch(CreateTodo(NewTodo))
      Alerting("Server", "the to-do is created successfully")
      setTitle("")
      setAttachments("")
      setContent([])
      navigate('/')
    } catch(err) {
      console.error(err)
    }
  }
    // title todo
  const [title, setTitle] = useState(DraftTodo.title)
    // attachments todo
  const [attachments, setAttachments] = useState(DraftTodo.attachments)
    // content todo
  const [content, setContent] = useState(DraftTodo.content)
    // first load
  useEffect(() => {
    if(DraftTodo){
      RichTextBox?.current?.getEditor().setContents(DraftTodo.content || [])
      setContent(DraftTodo.content)
    }
  }, [])
    // set the draft every change
  useEffect(() => {
    let GoodContent = []
    if(RichTextBox.current)
      GoodContent = !(RichTextBox.current.value === "" || RichTextBox.current.value === "<p><br></p>")? content : []      
    const DraftData = {
      title:title || "",
      content: GoodContent,
      attachments:attachments || "",
      id: "INDEX_DB_ID"
    }
    dispatch(SetDraft(DraftData))
  }, [content, title, attachments])
  return (<Suspense>
    <TitleInput value={title} onChange={(e) => setTitle(e.target.value)}/>
    <section className="col gap10">
      <p className="H4D">Content</p>
      <EditorToolbar onChange={() => setContent(RichTextBox.current.getEditor().getContents().ops)} ref={RichTextBox}/>
    </section>
    <Attachments value={attachments} onChange={(e) => setAttachments(e.target.value)}/>
    <div className="buttonsContainer row gap20">
      <button onClick={CreateHandler} type="button" className='mainButton center gap20'>
        Create
        <div className='center svgContainer'>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0.505108 7.31596L5.45038 8.55227L6.6867 13.4976C6.83853 14.1048 7.66798 14.187 7.93596 13.6213L13.936 0.954585C14.2041 0.388468 13.6142 -0.201458 13.0481 0.0667023L0.381407 6.0667C-0.184318 6.33468 -0.102185 7.16413 0.505108 7.31596ZM6.16182 7.35577L2.6357 6.47423L11.9319 2.07078L7.52842 11.367L6.64689 7.84084C6.58718 7.60198 6.40068 7.41548 6.16182 7.35577Z" fill="white"/>
          </svg>
        </div>
      </button>
    </div>
  </Suspense>)
}