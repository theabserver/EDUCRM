import React, {useState} from 'react'
import { Table, Tag, Space, Button, message } from "antd"
import Layout from 'antd/lib/layout/layout'
import {
  ExclamationCircleOutlined,
  MessageOutlined,
  DeleteOutlined,
  MailOutlined
} from "@ant-design/icons"
import { Pie, Column } from "@ant-design/charts"
import { Row, Col, Card, Modal } from "antd"

const Students = () => {
    const [filteredInfo, setFilteredInfo] = useState({})
    const [sortedInfo, setSortedInfo] = useState({})
    const [deleteModalVisible, setDeleteModalVisible] = useState(false)
    const confirmMessage = (e) => {
      message.success("Student will be deleted")
    }
    const cancelMessage = (e) => {
      message.error("Cancelled")
    }
    const deleteConfirm = () => {
      Modal.confirm({
        title: 'Confirm',
        icon: <ExclamationCircleOutlined />,
        content: 'Are you sure you want to delete Student',
        okText: 'Delete',
        cancelText: 'Cancel',
      });
    }
    const dataSource = [
      {
        key: "1",
        name: "Michael Jacob",
        age: 19,
        father: "John Jacob",
        mother: "Mary Anne Jacob",
        course: "B.Com",
        class: "1st year",
        section: "C",
        attendance: "86",
        recent_performance: "B",
        comments: "Less attendance due to Sports participation",
        phone: "+919902338512",
        email: "mjacob@gmail.com",
        residence: "Hostel Block 9",
      },
      {
        key: "2",
        name: "Rajesh Murthy",
        age: 22,
        father: "Sunil Murthy",
        mother: "Kiran Murthy",
        course: "B.BA",
        class: "2nd year",
        section: "A",
        attendance: "96",
        recent_performance: "A",
        comments: "",
        phone: "+919902748512",
        email: "rmurthy@gmail.com",
        residence: "Private residence",
      },
      {
        key: "3",
        name: "Kavitha Dixit",
        age: 21,
        father: "Anil Dixit",
        mother: "Manasa Dixit",
        course: "B.BA",
        class: "3rd year",
        section: "A",
        attendance: "91",
        recent_performance: "A",
        comments: "",
        phone: "+919906548512",
        email: "kdixit@gmail.com",
        residence: "Private residence",
      },
      {
        key: "4",
        name: "Rekha Chadha",
        age: 20,
        father: "Amarinder Chadha",
        mother: "Jhanvi Chadha",
        course: "B.BA",
        class: "2nd year",
        section: "B",
        attendance: "93",
        recent_performance: "B",
        comments: "",
        phone: "+919906568512",
        email: "rchadha@gmail.com",
        residence: "Private residence",
      },
      {
        key: "5",
        name: "Akbar Iqbal",
        age: 14,
        father: "Mohammed Iqbal",
        mother: "Fathima Iqbal",
        course: "High School",
        class: "9",
        section: "C",
        attendance: "98",
        recent_performance: "C",
        comments: "",
        phone: "+919989568512",
        email: "aiqbal@gmail.com",
        residence: "Private residence",
      },
    ]
    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
        // render: text => <a>{text}</a>,
      },
      {
        title: "Age",
        dataIndex: "age",
        key: "age",
        sorter: (a, b) => a.age - b.age,
        sortOrder: sortedInfo.columnKey === "age" && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: "Father",
        dataIndex: "father",
        key: "father",
      },
      {
        title: "Mother",
        dataIndex: "mother",
        key: "mother",
      },
      {
        title: "Class",
        dataIndex: "class",
        key: "class",
      },
      {
        title: "Section",
        dataIndex: "section",
        key: "section",
      },
      {
        title: "Course",
        dataIndex: "course",
        key: "course",
        filters: [
          { text: "B.BA", value: "B.BA" },
          { text: "B.Com", value: "B.Com" },
        ],
        filteredValue: filteredInfo.course || null,
        onFilter: (value, record) => record.course.includes(value),
        ellipsis: true,
      },
      {
        title: "Attendance %",
        dataIndex: "attendance",
        key: "attendance",
      },
      {
        title: "",
        key: "action",
        render: (text, record) => (
          <Space size="middle">
            <Button
              type="primary"
              shape="circle"
              title="Direct message with Student"
              icon={<MessageOutlined />}
              size={"small"}
            />
            <Button
              type="primary"
              shape="circle"
              title="Delete Student"
              icon={<DeleteOutlined />}
              size={"small"}
              onclick={deleteConfirm}
            />
            <Button
              type="primary"
              shape="circle"
              title="Email Student"
              icon={<MailOutlined />}
              size={"small"}
            />
          </Space>
        ),
      },
    ]
    const pieData = [
      {
        course: "B.BA",
        value: 302,
      },
      {
        course: "B.Com",
        value: 342,
      },
      {
        course: "High School",
        value: 821,
      },
      {
        course: "M.CA",
        value: 80,
      },
      {
        course: "B.A",
        value: 232,
      },
    ]
    const pieConfig = {
      data: pieData,
      meta: {
        course: {
          alias: "Course",
          range: [0, 1],
        },
        value: {
          alias: "Enrolled",
          formatter: v => {
            return `${v}`
          },
        },
      },
      angleField: "value",
      colorField: "course",
    }
     var bardata = [
       {
         course: "Dental",
         marks: 72,
       },
       {
         course: "B.Com",
         marks: 78,
       },
       {
         course: "B.BA",
         marks: 74,
       },
       {
         course: "Engineering",
         marks: 64,
       },
       {
         course: "Architecture",
         marks: 68,
       },
     ]
     var barconfig = {
       data: bardata,
       xField: "course",
       yField: "marks",
       meta: {
         course: { alias: "Course" },
         marks: { alias: "Marks (%)" },
       },
     }
    const handleChange = (pagination, filters, sorter) => {
      console.log("Various parameters", pagination, filters, sorter)
      setFilteredInfo(filters)
      setSortedInfo(sorter)
    }

    const clearFilters = () => {
      setFilteredInfo(null)
    }

    const clearAll = () => {
      setFilteredInfo(null)
      setSortedInfo(null)
    }

    const setAgeSort = () => {
      setSortedInfo({
        order: "descend",
        columnKey: "age",
      })
    }
    return (
      <>
        <Row>
          <Col span={24}>
            <Layout style={{ maxHeight: "400px" }}>
              <Table className="student-table"
                dataSource={dataSource}
                onChange={handleChange}
                pagination={{ pageSize: 5 }}
                scroll={{ y: 240 }}
                expandable={{
                  expandedRowRender: record => (
                    <p style={{ margin: 0 }}>Resides at {record.residence}</p>
                  ),
                  rowExpandable: () => true,
                }}
                columns={columns}
              />
            </Layout>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={8}>
            <Card
              title="Student density"
              bordered={false}
              style={{ width: "100%" }}>
              <Pie {...pieConfig} />
            </Card>
          </Col>
          <Col span={16}>
            <Card
              title="Performance"
              bordered={false}
              style={{ width: "100%" }}>
                <Column {...barconfig} />
              </Card>
          </Col>
        </Row>
      </>
    )
}

export default Students
