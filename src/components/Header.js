import React from 'react';
import styles from './Header.css';
import { Link } from 'dva/router'
import { Row, Col, Menu, Icon } from 'antd';

function Header({headKey}) {
  return (
    <div className={styles.header}>
      <header className={styles.clearfix}>
        <Row>
          <Col span={19} push={5}>
            <Menu
              selectedKeys={[headKey]}
              mode="horizontal"
              theme="light"
            >
              <Menu.Item key="1">
                <span><Link to="/">首页</Link></span>
              </Menu.Item>
              <Menu.Item key="2">
                <span><Link to="/products">例子</Link></span>
              </Menu.Item>
            </Menu>
          </Col>
          <Col span={5} pull={19}><h1 className={styles.title}>dva Demo</h1></Col>
        </Row>
      </header>
    </div>
  )
};

export default Header;
