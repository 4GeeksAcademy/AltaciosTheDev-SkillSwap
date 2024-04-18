import React from "react";
import {
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
  BsFillBellFill,
  BsNewspaper,
  BsPersonPlusFill,
  BsPersonWorkspace,
  BsMortarboardFill,
  BsFillPeopleFill 
} from "react-icons/bs";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";


import aitakingover from "../../../img/aitakingover.jpg"
import { TutorCard } from "./TutorCard";


export function Main() {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <main className="main-container">
      <div className="left-side">
        <div className="tutors">
          <h4>Recommended</h4>
          <div className="tutor-cards">
            <TutorCard/>
            <TutorCard/>
            <TutorCard/>
          </div>
        </div>
        <div className="statistics">
          <h4>Statistics</h4>
          <div className="charts">
            <ResponsiveContainer className="chart" width="100%" height="100%">
              <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="pv"
                  fill="#8884d8"
                  activeBar={<Rectangle fill="pink" stroke="blue" />}
                />
                <Bar
                  dataKey="uv"
                  fill="#82ca9d"
                  activeBar={<Rectangle fill="gold" stroke="purple" />}
                />
              </BarChart>
            </ResponsiveContainer>
            <ResponsiveContainer className="chart" width="100%" height="100%">
              <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="achievements">
          <h4>Achievements</h4>
          <div className="achievement-cards">
          <div className="dashboard-card">
              <div className="dashboard-card-inner">
                <h5 className="card-title">Taught:</h5>
                <BsPersonWorkspace className="card_icon" />
              </div>
              <h5>300</h5>
            </div>

            <div className="dashboard-card">
              <div className="dashboard-card-inner">
                <h5 className="card-title">Learned:</h5>
                <BsMortarboardFill  className="card_icon" />
              </div>
              <h5>12</h5>
            </div>
            
            <div className="dashboard-card">
              <div className="dashboard-card-inner">
                <h5 className="card-title">Connected:</h5>
                <BsFillPeopleFill className="card_icon" /> 
              </div>
              <h5>33</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="right-side">
        <div className="news">
          <div>
            <h4>Trending</h4>
            <div className="dashboard-card news-card">
                <div className="dashboard-card-inner">
                  <h5>AI is taking over:</h5>
                  <BsNewspaper  className="card_icon" />
                </div>
                <img className="news-image" src={aitakingover}/>
                <button type="button" className="btn btn-primary">Read more</button>
            </div>
          </div>
        </div>
        <div className="pending">
          <h4>Pending</h4>
            <div className="pending-card">
              <div>
                <h5>Details:</h5>
              </div>
              <p>User: Enzo Altamirano</p>
              <p>Skill: Javascript</p>
              <p>Date: 04/03/2024</p>
              <p>Time: 10:30</p>
              <p>Status: Pending</p>
              <div className="pending-card-inner">
                <button type="button" className="btn btn-danger pending-btn">Reject</button>
                <button type="button" className="btn btn-success pending-btn">Accept</button>
              </div>
            </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
