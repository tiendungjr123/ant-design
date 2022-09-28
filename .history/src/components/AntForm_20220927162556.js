import { Button, Form, Input } from 'antd'
import React from 'react'

export default function AntForm() {
  return (
    <div>
      <Form>
        <Form.Item label='User Name' name='username'>
          <Input placeholder='User Name' required></Input>
        </Form.Item>
        <Form.Item label='Password' name='password'>
          <Input.Password placeholder='Password' required></Input.Password>
        </Form.Item>
        <Form.Item>
          <Button type='primary' >Login</Button>
        </Form.Item>
      </Form>
    </div>
  )
}
