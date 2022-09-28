import { Select } from 'antd'
import React from 'react'

export default function AntSelect() {
  const fruits = ['Banana', 'Mango', 'Orange', 'Cherry'];
  return (
    <div>
      <p>Which is your favorite fruit?</p>
      <Select allowClear mode='multiple' placeholder='Select fruit' style={{ width: '100%' }}>
        {fruits.map((fruit, index) => {
          return <Select.Option key={index} value={fruit}>{fruit}</Select.Option>
        })}
      </Select>
    </div>
  )
}
