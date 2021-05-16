import React from 'react'

const Students = () => {
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
    ]
    return <div>Inside Students Component</div>
}

export default Students
