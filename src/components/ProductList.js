/**
 * Created by 001758 on 2017/7/14.
 */
import React from 'react'
import PropTypes from 'prop-types'
import { Table, Popconfirm, Button} from 'antd'

const ProductList = ({ onDelete, products, loading }) => {
  const columns = [{
    title: 'Name',
    dataIndex: 'name'
  },{
    title: 'Email',
    dataIndex: 'email'
  },{
    title: 'Actions',
    render: (text, record) => {
      return (
        <Popconfirm title="确定删除吗？" onConfirm={() => onDelete(record.id)}>
          <Button>Delete</Button>
        </Popconfirm>
      )
    }
  }]
  return (
    <Table dataSource={products} columns={columns} loading={loading} />
  )
}

ProductList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired
}

export default ProductList
