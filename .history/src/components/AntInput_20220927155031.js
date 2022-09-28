import { Input } from 'antd'
import React from 'react'
import { UserOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'
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
      <br />
      <br />
      <br />
      <Input.Password placeholder="input password" />
      <Input.Password
        placeholder="input password"
        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
      />
    </div>
  )
}
