import { Select } from 'antd'
import React from 'react'

export default function AntSelect() {
  const fruits = ['Banana', 'Mango', 'Orange', 'Cherry'];
  return (
    <div>
      <p>Which is your favorite fruit?</p>
      <Select placeholder='Select fruit'>
        {fruits.map((fruit, index) => {
          return <Select.Option key={index} value={fruit}></Select.Option>
        })}
      </Select>
    </div>
  )
}
