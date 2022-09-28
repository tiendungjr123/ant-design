import { Table } from 'antd'
import React from 'react'

export default function AntTable() {
  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: name => {
        return <a>{name}</a>
      }
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      sorter: (a, b) => a.age - b.age
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Graduated?',
      key: 'graduated',
      render: payload => {
        return <p>{payload.age > 40 ? 'true' : 'false'}</p>
      }
    }
  ];

  return (
    <div>
      <Table dataSource={dataSource} columns={columns}></Table>
    </div>
  )
}
