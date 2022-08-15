import React from 'react'
import { Form, Row, Col, Button, Input } from 'antd'
import { PlusCircleFilled } from '@ant-design/icons'
import { ITodo } from '../../interfaces'

interface IAddTodoProps {
  onFormSubmit: (todo: ITodo) => void;
}

export function AddTodo({ onFormSubmit } : IAddTodoProps) {
  const [form] = Form.useForm()
  const handleOnFinish = () => {
    onFormSubmit({
      name: form.getFieldValue('name')
    })
  }

  return (
    <Form
      form={form}
      onFinish={handleOnFinish}
      layout="horizontal"
    >
      <Row gutter={20}>
        <Col>
          <Form.Item
            name="name"
            rules={[{ required: true, message: 'This fiel is required' }]}
          >
            <Input placeholder="What needs to be done?" />
          </Form.Item>
        </Col>
        <Col>
          <Button
            type="primary"
            htmlType="submit"
            block
          >
            <PlusCircleFilled />
            Add to-do
          </Button>
        </Col>
      </Row>
    </Form>
  )
}
