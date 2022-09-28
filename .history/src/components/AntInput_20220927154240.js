import { Input } from 'antd'
import React from 'react'
import {UserOutlined} from 'antd/lib/icon'
export default function AntInput() {
  return (
    <div>
      <Input placeholder='Username' maxLength={20} prefix={<UserOutlined />}></Input>
    </div>
  )
}
