import React from 'react'
import { List } from 'antd'
import { ITodo } from '../../interfaces'
import { TodoItem } from '../TodoItem'

interface ITodoListProps {
  todos: ITodo[];
  onTodoRemove: (todo: ITodo) => void;
  onTodoToggle: (todo: ITodo) => void;
}

export function TodoList({ todos, onTodoRemove, onTodoToggle } : ITodoListProps) {
  return (
    <List
      locale={{
        emptyText: 'There nothing to do'
      }}
      dataSource={todos}
      renderItem={(todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onTodoRemove={onTodoRemove}
          onTodoToggle={onTodoToggle}
        />
      )}
      pagination={{
        position: 'bottom',
        pageSize: 5
      }}
    />
  )
}
