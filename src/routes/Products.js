/**
 * Created by 001758 on 2017/7/14.
 */
import React from 'react'
import { connect } from 'dva'
import ProductList from '../components/ProductList'
import Header from '../components/Header'
import { Row, Col, Menu, Icon } from 'antd';
import { Link } from 'dva/router'

class Products extends React.Component {
  constructor(props) {
    super(props);

    // ES6 类中函数必须手动绑定
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete (id) {
    this.props.dispatch({
      type: 'products/delete',
      payload: id
    })
  }
  render() {
    return (
      <div className="normal">
        <Header headKey="2"/>
        <div className="wrapper">
          <Row>
            <Col span={22} push={1} pull={1}>
              <h2>List of Products</h2>
              <ProductList onDelete={this.handleDelete} products={this.props.products} loading={this.props.loading}/>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    loading: state.loading.models.products,
    products: state.products
  };
}


//export default Products
//export default connect(({ products }) => ({
//  products
//}))(Products)

export default connect(mapStateToProps)(Products);
