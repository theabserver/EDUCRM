import React, {useState} from "react"
import "./Sidebar.css"
import logo from "../../logo.png"
import { Layout, Menu, Breadcrumb } from "antd"
import { Link } from "react-router-dom"
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons"


const { Sider } = Layout
const { SubMenu } = Menu

function Sidebar () {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={() => {
        setCollapsed(!collapsed)
      }}>
      <div className="logo">
        <img src={logo} />
      </div>
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          Dashboard
          <Link to="/dashboard" />
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
          Parents
        </Menu.Item>
        <Menu.Item key="3" icon={<FileOutlined />}>
          Students
          <Link to="/students" />
        </Menu.Item>
        <Menu.Item key="4" icon={<FileOutlined />}>
          Faculty
        </Menu.Item>
        <SubMenu key="sub1" icon={<UserOutlined />} title="Academic">
          <Menu.Item key="sub1a">B.Com</Menu.Item>
          <Menu.Item key="sub1b">B.A</Menu.Item>
          <Menu.Item key="sub1c">Diploma</Menu.Item>
          <Menu.Item key="sub1d">High School</Menu.Item>
          <Menu.Item key="sub1e">Primary</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<TeamOutlined />} title="Attendance">
          <Menu.Item key="sub2a">Student</Menu.Item>
          <Menu.Item key="sub2b">Faculty</Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" icon={<TeamOutlined />} title="Exam">
          <Menu.Item key="sub3a">Type</Menu.Item>
          <Menu.Item key="sub3b">Schedule</Menu.Item>
          <Menu.Item key="sub3c">Grade</Menu.Item>
          <Menu.Item key="sub3d">Attendance</Menu.Item>
        </SubMenu>
        <Menu.Item key="5" icon={<DesktopOutlined />}>
          Message
        </Menu.Item>
        <Menu.Item key="7" icon={<FileOutlined />}>
          Files
        </Menu.Item>
        <Menu.Item key="8" icon={<FileOutlined />}>
          Leave Application
        </Menu.Item>
      </Menu>
    </Sider>
  )
}

export default Sidebar