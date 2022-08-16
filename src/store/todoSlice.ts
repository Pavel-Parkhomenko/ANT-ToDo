import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { v1 as uuidV1 } from 'uuid'
import { ITodo } from '../interfaces'

interface IInitState {
  todos: ITodo[]
}

const initialState: IInitState = {
  todos: []
}

export const todoSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<ITodo>) => {
      action.payload.id = uuidV1()
      action.payload.completed = false
      state.todos = [...state.todos, action.payload]
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
    },
    changeStatusTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.map((todo: ITodo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    }
  }
})

export const { addTodo, removeTodo, changeStatusTodo } = todoSlice.actions

export default todoSlice.reducer
