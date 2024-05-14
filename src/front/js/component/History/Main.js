import React, { useEffect, useContext, useState } from 'react'
import DataTable from 'react-data-table-component';
import customStyles from "./tableCustomStyles"
import mockdata from "./MOCK_DATA.json"
import "../../../styles/history.css";
import { Context } from "../../store/appContext";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function Main() {
  const { store, actions } = useContext(Context)
  const [status, setStatus] = useState('');
  let columns = []
  if (store.userSessions) {
    columns = [
      {
        name: "Id",
        selector: (row) => row.id,
        sortable: true,

      },
      {
        name: "Learner",
        selector: (row) => row.learner_name,
        sortable: true
      },
      {
        name: "Tutor",
        selector: (row) => row.tutor_name,
        sortable: true,
      },
      {
        name: "Skill",
        selector: (row) => row.skill_name,
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
  }

  useEffect(() => {
    actions.getUserSessions(status)
  }, [])


  const mockDataJs = mockdata //no need to parse Data works fine
  // const [search, setSearch] = useState(mockDataJs)

  // const handleFilterStudent = (event) => {
  //   const newData = mockDataJs.filter(row => row.student.toLowerCase().includes(event.target.value.toLowerCase()))
  //   setSearch(newData)
  // }
  // const handleFilterTutor = (event) => {
  //   const newData = mockDataJs.filter(row => row.tutor.toLowerCase().includes(event.target.value.toLowerCase()))
  //   setSearch(newData)
  // }
  // const handleFilterSkill = (event) => {
  //   const newData = mockDataJs.filter(row => row.skill.toLowerCase().includes(event.target.value.toLowerCase()))
  //   setSearch(newData)
  // }
  // const handleFilterDate = (event) => {
  //   const newData = mockDataJs.filter(row => row.date.toLowerCase().includes(event.target.value.toLowerCase()))
  //   setSearch(newData)
  // }
  // const handleFilterTime = (event) => {
  //   const newData = mockDataJs.filter(row => row.time.toLowerCase().includes(event.target.value.toLowerCase()))
  //   setSearch(newData)
  // }
  // const handleFilterStatus = (event) => {
  //   const newData = mockDataJs.filter(row => row.status.toLowerCase().includes(event.target.value.toLowerCase()))
  //   setSearch(newData)
  // }

  // const all = store.userSessions && store.userSessions.length
  const paginationRowsPerPageOptions = [10, 15, 20, 25, 30, 50]

  return (
    <div className="history-container" >
      <h4 className="history-title">Session History</h4>

      <div className="input-container">
        {/* <input className="history-search" placeholder='Search Student' />
        <input className="history-search" placeholder='Search Tutor' />
        <input className="history-search" placeholder='Search Skill'  />
        <input className="history-search" placeholder='Search Date' />
        <input className="history-search" placeholder='Search Time'  />
        <input className="history-search" placeholder='Search Status'  /> */}
        <Box sx={{ minWidth: 120, mr: 2 }}>
          <FormControl fullWidth>
            <InputLabel id="status-select-label">Status</InputLabel>
            <Select
              labelId="status-select-label"
              id="status-select"
              value={status}
              label="Status"
              onChange={(event) => setStatus(event.target.value)}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Accepted">Accepted</MenuItem>
              <MenuItem value="Pending">Pending</MenuItem>
              <MenuItem value="Rejected">Rejected</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <button type="submit" className="send-session-details" onClick = {() => actions.getUserSessions(status)}>Search</button>
      </div>

      <div className="table-container">
        {store.userSessions ?
          <DataTable
            columns={columns}
            data={store.userSessions}
            pagination
            highlightOnHover
            striped
            responsive
            fixedHeader
            // progressPending
            customStyles={customStyles}
            paginationRowsPerPageOptions={paginationRowsPerPageOptions}
          />
          :
          <span class="loader" style={{margin:"auto"}}></span>

        }

      </div>
    </div >
  )
}

export default Main
