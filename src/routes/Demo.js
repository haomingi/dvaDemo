/**
 * Created by 001758 on 2017/7/14.
 */
import React from 'react'
import { connect } from 'dva'
import Header from '../components/Header'
import { Row, Col, Menu, Icon } from 'antd';
import { Link } from 'dva/router'

class Demo extends React.Component {
  constructor(props) {
    super(props);

    // 设置 initial state
    this.state = {
      mode: 'inline',
      theme: 'light',
    };

  }

  render() {
    return (
      <div className="normal">
        <Header headKey="2"/>
        <div className="wrapper">
          <Row>
            <Col span={5} >
              <Menu
                style={{ width: '100%' }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['1']}
                mode={this.state.mode}
                theme={this.state.theme}
              >
                <Menu.Item key="1">
                  <Link to="/demo/products">列表</Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to="/demo/products">列表</Link>
                </Menu.Item>
              </Menu>
            </Col>
            <Col span={17} push={1} pull={1}>

            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

//export default Products
//export default connect(({ products }) => ({
//  products
//}))(Products)

export default connect()(Demo);
