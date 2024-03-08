
// 引入路由配置
import { Routes, Route, useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';

import PaintingGarden from '../src/view/painting-garden';
import Draggable from '../src/view/draggable';

import './App.css';

const { Header, Sider, Content } = Layout;


function App() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();
  const onMenuClick = (e) => {
    navigate(e.key, { replace: true })
  }

  return (
    <div className="App">
      <Layout
        style={{
          minHeight: '100vh',
        }}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['/']}
            onClick={onMenuClick}
            items={[
              {
                key: '/',
                label: 'js实现圆周运动',
              },
              {
                key: '/draggable',
                label: 'js实现拖拽',
              },
            ]}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Routes>
              <Route path="/" element={<PaintingGarden />} />
              <Route path="/draggable" element={<Draggable />} />

            </Routes>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
