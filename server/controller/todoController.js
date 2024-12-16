const { ObjectId } = require("mongodb")

const CreateTodo =  async (req, res) => {
  try{
      // get the data
    const { title, content, attachments } = req.body
      // check if every think is exist [content, attachments] // optional
    if(!title) return res.status(400).json({
      error: true,
      message: "fill all the require details",
    })
      // get the db
    const db = req.db
      // connect the collectino
    const TodoDB = await db.collection(process.env.TODO_COLLECTION_DB)
      // create the new todo
    const NewTodo = {
      title,
      content: content || {},
      attachments: attachments || [],
      status: "todo"
    }
      // insert to db
    const isInserted = await TodoDB.insertOne(NewTodo)
      // check if created
    if(isInserted.insertedCount === 0) return res.status(500).json({
      error: true,
      message: "server could not create the to-do, try again later."
    })
      // res 200 with the new todo
    res.status(200).json({
      error: false,
      status: 200,
      message:"The to-do is created successfully!!",
      data: NewTodo
    })
  } catch(err) {
    console.error(err)
    res.status(500).json({
      "error": true,
      "message": "internal server error!!"
    })
  }
}

const CancelTodo = async (req, res) => {
  try{
      // get the id
    const {id} = req.params
      // check the id
    if(!id || !ObjectId.isValid(id)) return res.status(201).json({
      error: true,
      message: "the request is not good!"
    })
      // get the db
    const db = req.db
      // declare the collection
    const Todos = await db.collection('Todos')
      // declare filter
    const filter = {_id: new ObjectId(id)}
      // delete the todo from db
    const isDeleted = await Todos.deleteOne(filter)
      // check if deleted
    if(isDeleted.deletedCound === 0) return res.status(500).json({
      error: true,
      message: "the to-do is not found"
    })
      // clear response
    res.status(200).json({
      error: false,
      message: "theto-do is canceled successfully!!",
      id
    })
  } catch(err) {
    console.error(err)
    res.status(500).json({
      "error": true,
      "message": "internal server error!!"
    })
  }
}

const UpdateTodo = async (req, res) => {
  try{
      // get the id
    const {id} = req.params
      // check if the id is valid
    if(!id || !ObjectId.isValid(id)) return res.status(201).json({
      error: true,
      message: "the request is not good!"
    })
      // declare the id correctly
    const _id = new ObjectId(id)
      // get the data need to edit
    const UpdatedTodo = req.body
      // chekc if no data
    if(Object.keys(UpdatedTodo).length === 0) return res.status(400).json({
      error: true,
      message: "no data in the body!"
    })
      // get the db
    const db = req.db
      // connect the collection
    const Todos = await db.collection(process.env.TODO_COLLECTION_DB)
      // update the to-do by id
    const isUpdated = await Todos.updateOne(
      { _id },
      {$set: UpdatedTodo}
    )
      // check if updated
    if(isUpdated.modifiedCount === 0) return res.status(500).json({
      error: true,
      message: "the to-do is not updated, try again later."
    })
      // get the new todo
    const UpdatedTodoData = await Todos.findOne({_id})
      // correct
    res.status(200).json({
      error: false,
      message: "the to-do is updated successfully!",
      UpdatedTodoData
    })
  } catch(err){
    console.error(err)
    res.status(500).json({
      "error": true,
      "message": "internal server error!!"
    })
  }
}

const SearchTodo = async (req, res) => {
  try{
      // get the searech text
    let { search : SearchText, status} = req.body
      // check status
    const whiteList = ["saved", "checked", "bin", "todo"] 
    if(whiteList.indexOf(status) === -1) return res.status(400).json({
      error: true,
      message: 'not correct request ,the status is not include'
    })
      // check if empty
    if(SearchText.length === 0) return res.status(400).json({
      error: true,
      message: "the body is empty!"
    })
      // convert to string to sure
    SearchText = SearchText.toString()
      // get the db
    const db = req.db
      // connect the collection
    const Todos = await db.collection(process.env.TODO_COLLECTION_DB) 
      // find the content
    const result = await Todos.find({"title": { $regex: SearchText, $options: 'i' }, status}).toArray()
      // check if data
    if(result?.length === 0) return res.status(201).json({
      error: false,
      message: 'no to-do founded',
      data: []
    })
    res.status(200).json({
      error:false,
      message: `there is ${result.length} to-dos`,
      data: result,
    })
  } catch(err) {
    console.error(err)
    res.status(500).json({
      "error": true,
      "message": "internal server error!!"
    })
  }
}

const GetStatus = async (req, res) => {
  try{
      // get the todo status
    const {status} = req.body
      // check if todo status is correct
    const whiteList = ["saved", "checked", "bin", "todo"] 
    if(whiteList.indexOf(status) === -1) return res.status(400).json({
      error: true,
      message: 'not correct request ,the status is not include'
    })
      // get the db
    const db = req.db
      // connect the collection
    const Todos = await db.collection(process.env.TODO_COLLECTION_DB)
      // find the todos
    const result = await Todos.find({status}).toArray()
      // check if result
    if(result.length === 0) return res.status(201).json({
      error: false,
      status: 201,
      message: "there is no todo in this stasus",
      data: []
    })
      // correct
    res.status(200).json({
      error: false,
      message: "no message",
      data: result
    })
  } catch(err) {
    console.error(err)
  }
}

module.exports = {
  CreateTodo,
  CancelTodo,
  UpdateTodo,
  SearchTodo,
  GetStatus,
}

