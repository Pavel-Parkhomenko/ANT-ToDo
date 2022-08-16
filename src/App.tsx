import React from 'react'
import { Row, Col, Card, PageHeader, message } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import 'antd/dist/antd.css'
import { AddTodo } from './componets/AddTodo'
import { ITodo } from './interfaces'
import { TodoList } from './componets/TodoList'
import { RootState } from './store/store'
import { addTodo, changeStatusTodo, removeTodo } from './store/todoSlice'
import './App.css'

function App() {
  const todos = useSelector((state: RootState) => state.todoReducer.todos)
  const dispatch = useDispatch()

  const handleFormSubmit = (todo: ITodo): void => {
    dispatch(addTodo(todo))
    message.success('Todo added!')
  }

  const handleRemoveTodo = (todo: ITodo): void => {
    dispatch(removeTodo(todo.id as string))
    message.error('Todo deleted!')
  }

  const handleToggleTodoStatus = (todo: ITodo): void => {
    dispatch(changeStatusTodo(todo.id as string))
    message.warn('Todo changed!')
  }

  return (
    <div className="container">
      <Row
        justify="center"
        align="middle"
        gutter={[0, 20]}
        className="grid"
      >
        <Col
          xs={{ span: 23 }}
          sm={{ span: 23 }}
          md={{ span: 21 }}
          lg={{ span: 20 }}
          xl={{ span: 18 }}
        >
          <PageHeader
            title="Your Todo List"
            subTitle="Everything that is important is here"
          />
        </Col>
        <Col
          xs={{ span: 23 }}
          sm={{ span: 23 }}
          md={{ span: 21 }}
          lg={{ span: 20 }}
          xl={{ span: 18 }}
        >
          <Card
            title="Create a new todo"
            style={{ borderRadius: '20px' }}
          >
            <AddTodo
              onFormSubmit={handleFormSubmit}
            />
          </Card>
        </Col>
        <Col
          xs={{ span: 23 }}
          sm={{ span: 23 }}
          md={{ span: 21 }}
          lg={{ span: 20 }}
          xl={{ span: 18 }}
        >
          <Card
            title="Todo List"
          >
            <TodoList
              onTodoRemove={handleRemoveTodo}
              onTodoToggle={handleToggleTodoStatus}
              todos={todos}
            />
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default App
