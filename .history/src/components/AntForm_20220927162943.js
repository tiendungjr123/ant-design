import { Button, Form, Input } from 'antd'
import React from 'react'

export default function AntForm() {
  return (
    <div>
      <Form  layout="vertical">
        <Form.Item label='User Name' name='username'>
          <Input placeholder='User Name' required></Input>
        </Form.Item>
        
      </Form>
    </div>
  )
}
