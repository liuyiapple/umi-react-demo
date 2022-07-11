import React from 'react';
import Login from '../pages/user/login';
import { Layout } from 'antd';

const { Header, Sider, Footer } = Layout;

function Index(props) {
  return (
    <div>
      <Header/>
      <Login />
      <Footer/>
    </div>
  );
}

export default Index;
