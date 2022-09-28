import { Input } from 'antd'
import React from 'react'
import { UserOutlined } from '@ant-design/icons'
export default function AntInput() {
  return (
    <div>
      <Input
        size='medium'
        allowClear
        placeholder='Username'
        maxLength={20}
        prefix={<UserOutlined
        />}>
      </Input>
    </div>
  )
}
