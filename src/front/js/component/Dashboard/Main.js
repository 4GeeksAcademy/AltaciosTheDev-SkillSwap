import React from "react";
import {
  BsNewspaper,
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

import { TutorCard } from "./TutorCard";
import AchievementCard from "./AchievementCard";
import PendingCard from "./PendingCard";
import NewsCard from "./NewsCard";

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
            <TutorCard name="Enzo Altamirano" skill="Javascript" role="Tutor" level="Intermediate" />
            <TutorCard name="Miguel Reyes" skill="Java" role="Tutor" level="Intermediate" />
            <TutorCard name="Jean Nounon" skill="Python" role="Tutor" level="Intermediate" />
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
            <AchievementCard title="Taught" icon={<BsPersonWorkspace className="card_icon achievement-icon" />} />
            <AchievementCard title="Learned" icon={<BsMortarboardFill className="card_icon achievement-icon" />} />
            <AchievementCard title="Connected" icon={<BsFillPeopleFill className="card_icon achievement-icon" />} />
          </div>
        </div>
      </div>
      <div className="right-side">
        <NewsCard />
        <div className="pending">
          <h4>Pending</h4>
          <PendingCard />
        </div>
      </div>
    </main>
  );
}

export default Main;
