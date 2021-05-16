import React from "react"
import Sidebar from "../component/Sidebar"
import Dashboard from "../component/Dashboard"
import Students from "../component/Students"
import { Layout } from "antd"
import Profile from '../component/Profile'
const { Header, Content, Footer, Sider } = Layout
import { BrowserRouter as Router, Route } from "react-router-dom"

const Home = () => {
  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar />
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{ paddingLeft: 16 }}>
            <Profile user="admin" />
          </Header>
          <Content style={{ margin: "16px" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}>
              <Route exact path="/dashboard" component={Dashboard} />
              <Route path="/students" component={Students} />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Oxford Group of Institutions ©2021 Created by Arketype
          </Footer>
        </Layout>
      </Layout>
    </Router>
  )
}
export default Home