import React from 'react'
import { Popover, Button, Space } from "antd"
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
          <Button>
            <Space>
              <UserOutlined />
              {user}
            </Space>
          </Button>
        </Popover>
      </>
    )
}

export default Profile
