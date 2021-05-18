import React from 'react'
import { Popover, Button, Space, Avatar } from "antd"
import {
  UserOutlined,
} from "@ant-design/icons"
function Profile({user}) {
    const content = (
      <div>
        <p>Settings</p>
        <p>Logout</p>
      </div>
    )
    return (
      <>
        <Popover content={content} title="Profile" trigger="click">
          <Space>
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            {user}
          </Space>
        </Popover>
      </>
    )
}

export default Profile
