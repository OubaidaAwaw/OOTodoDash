import { createSlice } from "@reduxjs/toolkit";
import {createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Alerting from "../../components/Alerting/Alerting";

const initialState = {
  IsLoading: true ,
  draft: {
    title: "",
    content: [],
    attachments: "",
    id: "INDEX_DB_ID"
  },
  res: {
    data:[]
  }
}
const BASED_URL = "http://localhost:5000"
const headers = {headers: {'Content-Type': 'application/json'}}
const whiteList = ["todo", "checked", "saved", "bin"]

export const FetchTodos = createAsyncThunk('TodoList/FetchTodos', async (status) => {
  try{
    if(whiteList.indexOf(status) !== -1){
      const sendData = JSON.stringify({ status })
      const response = await axios.post(`${BASED_URL}/todos/status`, sendData, headers)
      .then(res => res.data)
      .catch(err => console.error(err))
      return response || {
        error: true,
        message: "No DataBase Avalible"
      }
    } 
    return {
      error: true,
      message: "some things went wrong 1"
    }
  }catch(err){
    console.error(err)
    return {
      error: true,
      message: "some things went wrong 1"
    }
  }
})
export const SearchTodo = createAsyncThunk('TodoList/SearchTodo', async (search) => {
  try{
    const sendData = JSON.stringify(search)
    const response = await axios.post(`${BASED_URL}/todos/search`, sendData, headers)
    .then(res => res.data)
    .catch(err => console.error(err))
    return response  || {
      error: true,
      message: "No DataBase Avalible"
    }
  } catch(err) {
    console.error(err)
    return {
      error: true,
      message: "some things went wrong 2"
    }
  }
})
export const UpdateTodo = createAsyncThunk('TodoList/UpdateTodo', async (UpdatedData) => {
  try{
    let sendData = {...UpdatedData}
    delete sendData.id
    const response = await axios.put(`${BASED_URL}/todos/${UpdatedData.id}`, sendData, headers)
    .then(res => res.data)
    .catch(err => console.error(err))
    return response  || {
      error: true,
      message: "No DataBase Avalible"
    }
  } catch(err) {
    console.error(err)
    return {
      error: true,
      message: "some things went wrong 3"
    }
  }
})
export const CreateTodo = createAsyncThunk('TodoList/CreateTodo', async (TodoData) => {
  try{
    const response = await axios.post(`${BASED_URL}/todos`, TodoData, headers)
    .then(res => res.data)
    .catch(err => console.error(err))
    return response  || {
      error: true,
      message: "No DataBase Avalible"
    }
  } catch(err) {
    console.error(err)
    return {
      error: true,
      message: "some things went wrong 4"
    }
  }
})
export const DeleteTodo = createAsyncThunk('TodoList/DeleteTodo', async (id) => {
  try{
    const res = await fetch(`${BASED_URL}/todos/${id}`, {
      method: "DELETE",
      ...headers,
    })
    .then(res => res.json())
    .catch(err => console.error(err))
    return res  || {
      error: true,
      message: "No DataBase Avalible"
    }
  } catch(err) {
    console.error(err)
    return {
      error: true,
      message: "some things went wrong 5"
    }
  }
})

const getTodos = (state, action)=> {
  if(!action.payload.error){
    state.IsLoading = false
    action.payload.data.reverse()
    state.res = action.payload // data payload
  }
  else 
    Alerting("Server", action.payload.message || "Unknown error")
}
const pendingTodos = (state,action)=>{
  state.IsLoading = true
}
const rejectedGet = (state, action) => {
  if(!action.payload.error){
    state.IsLoading = false
    state.res = action.payload // error payload
  }
  else
    Alerting("Server", action.payload.message || "Unknown error")
}
const rejectedFetch = (state, action) => {
  if(action.payload.error)
    Alerting("Server", action.payload.message)
}

const TodoListSlice = createSlice({
  name:'TodoList',
  initialState,
  reducers: {
    GetTodoByID(state, action){
      try{
        let NewState = JSON.parse(JSON.stringify(state))
        let result = NewState.res.data.find((item) => item._id === action.payload)
        result = [result]
        NewState.res.data = result
        return NewState
      } catch(err) {
        console.log(err)
      }
    },
    SetDraft(state, action){
      return {
        ...state,
        draft :{
          ...action?.payload
        }
      }
    }
  },
  extraReducers(builder){
    builder
    .addCase(FetchTodos.fulfilled, getTodos)
    .addCase(FetchTodos.pending,pendingTodos)
    .addCase(FetchTodos.rejected,rejectedGet )

    .addCase(SearchTodo.fulfilled, getTodos)
    .addCase(SearchTodo.pending, pendingTodos)
    .addCase(SearchTodo.rejected, rejectedGet)

    .addCase(UpdateTodo.rejected, rejectedFetch)
    .addCase(UpdateTodo.fulfilled, (state, action)=> {
      if(!action.payload.error) {
        let NewState = JSON.parse(JSON.stringify(state))
        console.log(NewState)
        NewState.res.data = NewState.res.data.filter((item) => item._id !== action.payload.UpdatedTodoData._id)
        NewState.res.data.unshift(action.payload.UpdatedTodoData)
        return NewState
      }
      else 
        Alerting("Server", action.payload.message || "Unknown error")
    })

    .addCase(CreateTodo.rejected, rejectedFetch)
    .addCase(CreateTodo.fulfilled, (state, action) => {
      if(action.payload.error)
        Alerting("Server", action.payload.message)
      else{
        let NewState = JSON.parse(JSON.stringify(state))
        NewState.res.data.unshift(action.payload.data)
        return NewState
      }
    })

    .addCase(DeleteTodo.rejected, rejectedFetch)
    .addCase(DeleteTodo.fulfilled, (state, action) => {
      if(action.payload.error){
        Alerting("Server", action.payload.message)
      } else {
        let NewState = JSON.parse(JSON.stringify(state))
        NewState.res.data = NewState.res.data.filter(item => item._id !== action.payload.id);
        return NewState
      }
    })
  }
})

export const res = state => state.TodoList.res
export const draft = state => state.TodoList.draft
export const IsLoading = state => state.TodoList.IsLoading
export const {SetDraft, GetTodoByID} = TodoListSlice.actions
export default TodoListSlice.reducer