import React from "react"
import Sidebar from "../component/Sidebar"
import Dashboard from "../component/Dashboard"
import Students from "../component/Students"
import "./Home.css"
import { Layout, Popover, Space, Badge } from "antd"
import Profile from '../component/Profile'
import { BrowserRouter as Router, Route } from "react-router-dom"
import { MessageOutlined, WarningOutlined } from "@ant-design/icons"

const { Header, Content, Footer, Sider } = Layout
const Home = () => {
  const messageContent = (
    <div>
      <p>3 unread messages from a Parent: Jagdish Chaudhary </p>
      <p>
        1 unread message from a Faculty member: Assistant Professor Sushil Hegde
      </p>
      <p>
        1 unread message from a Faculty member: Professor Gokul Varghese
      </p>
      <p>
        9 unread messages from a Faculty member: High School Teacher Mrs. Raksha Kumar
      </p>
      <p>
        3 unread messages from a Student: Amarinder Jaiswal
      </p>
      <p>
        1 unread message from a vendor: Prateek Caterers
      </p>
    </div>
  )
   const warningMessageContent = (
     <div>
       <p>Student hasn't reported today: Pramod Gupta</p>
       <p>
         Faculty member on leave: B.Com Lecturer Vincent Tauro
       </p>
     </div>
   )
  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar />
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{ paddingLeft: 16 }}>
            <Space size="large">
              <Profile user="admin" />
              <Badge count={5} size="small">
                <Popover
                  content={messageContent}
                  title="Notifications"
                  trigger="click">
                  <MessageOutlined
                    style={{ fontSize: "16px", color: "#08c" }}
                  />
                </Popover>
              </Badge>
              <Badge count={2} size="small">
                <Popover
                  content={warningMessageContent}
                  title="Important"
                  trigger="click">
                  <WarningOutlined
                    style={{ fontSize: "16px", color: "#08c" }}
                  />
                </Popover>
              </Badge>
            </Space>
          </Header>
          <Content className="main-content" style={{ margin: "16px" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}>
              <Route exact path="/" component={Dashboard} />
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