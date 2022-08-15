import React from 'react'
import {
  Tooltip, Tag, List,
  Button, Popconfirm, Switch
} from 'antd'
import { CloseOutlined, CheckOutlined } from '@ant-design/icons'
import { ITodo } from '../../interfaces'

interface ITodoItemProps {
  todo: ITodo;
  onTodoRemove: (todo: ITodo) => void;
  onTodoToggle: (todo: ITodo) => void;
}

export function TodoItem({ todo, onTodoRemove, onTodoToggle } : ITodoItemProps) {
  return (
    <List.Item
      actions={[
        <Tooltip
          key="tooltip"
          title={todo.completed ? 'Mark as uncompleted' : 'Mark as completed'}
        >
          <Switch
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
            onChange={() => onTodoToggle(todo)}
            defaultChecked={todo.completed}
          />
        </Tooltip>,
        <Popconfirm
          key="popconfirm"
          title="Are you sure you want to delete?"
          onConfirm={() => onTodoRemove(todo)}
        >
          <Button type="primary" danger> Xe </Button>
        </Popconfirm>
      ]}
    >
    <div>
      <Tag
        color={todo.completed ? 'cyan' : 'red'}
      >
        {todo.name}
      </Tag>
    </div>
    </List.Item>
  )
}
