  // import hooks from RTK
import {configureStore} from "@reduxjs/toolkit"

  // import slices
import TodoListSlice from "./../states/slices/TodoListSlice"

export const store = configureStore({
  reducer:{
    TodoList : TodoListSlice,
  }
})
