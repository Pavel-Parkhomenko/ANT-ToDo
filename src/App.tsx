import React, { useState } from 'react'
import { Row, Col, Card, PageHeader } from 'antd'
import 'antd/dist/antd.css'
import { AddTodo } from './componets/AddTodo'
import { ITodo } from './interfaces'
import { TodoList } from './componets/TodoList'

function App() {
  const [todos, setTodos] = useState<ITodo[]>([])
  const handleFormSubmit = (todo: ITodo): void => {
    setTodos([...todos, todo])
    console.log(todo)
  }

  const handleRemoveTodo = (todo: ITodo): void => {
    console.log('handleRemoveTodo', todo)
  }

  const handleToggleTodoStatus = (todo: ITodo): void => {
    console.log('handleToggleTodoStatus', todo)
  }

  return (
    <Row
      justify="center"
      align="middle"
      gutter={[0, 20]}
    >
      <Col
        xs={{ span: 23 }}
        sm={{ span: 23 }}
        md={{ span: 21 }}
        lg={{ span: 20 }}
        xl={{ span: 18 }}
      >
        <PageHeader
          title="Add todo"
          subTitle="A few words are for good veiw"
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
        >
          <AddTodo onFormSubmit={handleFormSubmit} />
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
  )
}

export default App
