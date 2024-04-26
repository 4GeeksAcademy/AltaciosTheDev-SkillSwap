import React, { useState } from 'react'
// #import DataTable from 'react-data-table-component';
import customStyles from "./tableCustomStyles"
import mockdata from "./MOCK_DATA.json"
import "../../../styles/history.css";


const columns = [
  {
    name: "Id",
    selector: (row) => row.id,
    sortable: true,

  },
  {
    name: "Student",
    selector: (row) => row.student,
    sortable: true
  },
  {
    name: "Tutor",
    selector: (row) => row.tutor,
    sortable: true,
  },
  {
    name: "Skill",
    selector: (row) => row.skill,
    sortable: true,

  },
  {
    name: "Date",
    selector: (row) => row.date,
    sortable: true
  },
  {
    name: "Time",
    selector: (row) => row.time,
    sortable: true,
  },
  {
    name: "Status",
    selector: (row) => row.status,
    sortable: true,
  }
];

function Main() {

  const mockDataJs = mockdata //no need to parse Data works fine
  const [search, setSearch] = useState(mockDataJs)

  const handleFilterStudent = (event) => {
    const newData = mockDataJs.filter(row => row.student.toLowerCase().includes(event.target.value.toLowerCase()))
    setSearch(newData)
  }
  const handleFilterTutor = (event) => {
    const newData = mockDataJs.filter(row => row.tutor.toLowerCase().includes(event.target.value.toLowerCase()))
    setSearch(newData)
  }
  const handleFilterSkill = (event) => {
    const newData = mockDataJs.filter(row => row.skill.toLowerCase().includes(event.target.value.toLowerCase()))
    setSearch(newData)
  }
  const handleFilterDate = (event) => {
    const newData = mockDataJs.filter(row => row.date.toLowerCase().includes(event.target.value.toLowerCase()))
    setSearch(newData)
  }
  const handleFilterTime = (event) => {
    const newData = mockDataJs.filter(row => row.time.toLowerCase().includes(event.target.value.toLowerCase()))
    setSearch(newData)
  }
  const handleFilterStatus = (event) => {
    const newData = mockDataJs.filter(row => row.status.toLowerCase().includes(event.target.value.toLowerCase()))
    setSearch(newData)
  }


  const all = mockdata.length
  const paginationRowsPerPageOptions = [10, 15, 20, 25, 30, 50, all]

  return (
    <div className="history-container" >
      <h4 className="history-title">Session History</h4>

      <div className="input-container">
        <input className="history-search" placeholder='Search Student' onChange={handleFilterStudent} />
        <input className="history-search" placeholder='Search Tutor' onChange={handleFilterTutor} />
        <input className="history-search" placeholder='Search Skill' onChange={handleFilterSkill} />
        <input className="history-search" placeholder='Search Date' onChange={handleFilterDate} />
        <input className="history-search" placeholder='Search Time' onChange={handleFilterTime} />
        <input className="history-search" placeholder='Search Status' onChange={handleFilterStatus} />
      </div>

      <div className="table-container">
        <DataTable
          columns={columns}
          data={search}
          pagination
          highlightOnHover
          striped
          responsive
          fixedHeader
          // progressPending
          customStyles={customStyles}
          paginationRowsPerPageOptions={paginationRowsPerPageOptions}
        />
      </div>
    </div >
  )
}

export default Main
