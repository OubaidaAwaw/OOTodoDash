  // import css files
import "./../../assets/CSS/Global.css"
import "./TodoListLayout.css"

  // import react router components
import { Outlet } from "react-router-dom"

  // import components
import Header from "../../components/Header/Header"
import Nav from "../../components/Nav/Nav"

  // import react hooks
import { useEffect } from "react"

  // import idb functions
import { openDB } from 'idb';

  // import react redux hooks
import { useDispatch, useSelector } from "react-redux"

  // import react redux data
import { draft, SetDraft } from "../../states/slices/TodoListSlice"
  
  // open or create a database with a store for drafts
const db = openDB('todo', 1, {
  upgrade(db) {
    if(!db.objectStoreNames.contains("draft"))
      db.createObjectStore('draft', { keyPath: "id", autoIncrement: true })
  },
})
.catch((err)=> console.log(err))
  // declare draftData global
let draftData
  // before exit the page (unload)
window.addEventListener('beforeunload', beforeEnd)
export default function TodoListLayout(){
    // declare dispatch
  const dispatch = useDispatch()
    // declare data
  draftData = useSelector(draft)
    // set the index db draft in redux
  useEffect(() => {
    try{
      async function getDraft() {
        const DB = await db
          // check if the object store is exists
        if (!DB.objectStoreNames.contains("draft")) {
          console.warn(`Object store draft does not exist.`)
          return null
        }
          // get the draft
        const draft = await DB.get('draft', "INDEX_DB_ID")
          // set the data in redux
        if(typeof draft === "object")
          dispatch(SetDraft(draft))
          // Open a transaction
        const tx = DB.transaction('draft', 'readwrite') 
          // Clear all records from the store
        await tx.store.clear() 
          // Commit the transaction
        await tx.done 
      }
      getDraft()
    } catch(err) {
      console.error("no draft in idb", err)
    }
  }, [])
  return (<>
    <div className="headerNaveContainer row">
      <Nav/>
      <div className="mainContainerTodolist col">
        <Header/>
        <main id="mainScroll" role="main" className="col gap50">
          <Outlet/>
        </main>
      </div>
    </div>
  </>)
}

function beforeEnd(e){
    // save the draft synchronously
  if(draftData.title !== '' || draftData.attachments !== '' || (draftData.content.length !== 0) )
  db?.then((dbInstance) => {
    dbInstance.put('draft', draftData)
  })
    // prevent the default (exit)
  e.preventDefault()
    // trigger confirmation dialog
  e.returnValue = ''
}
