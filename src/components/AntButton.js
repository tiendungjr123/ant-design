import { Button } from 'antd'
import React from 'react'
import { PoweroffOutlined } from '@ant-design/icons';
export default function AntButton() {
  return (
    <div>
      <Button  icon={<PoweroffOutlined />} type='primary'>Click me</Button>
    </div>
  )
}
