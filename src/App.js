import React, { useState } from "react";
import data from "./data/data";
import './App.css'

// import "./styles/App.css";

import Form from "./components/Form";

export default function App() {
  const [teamList, updateTeamList] = useState(data);
  console.log("Team List: ", teamList);

  return (
    <>
      <table>
        <tbody>
          <tr>
            <th>Name:</th>
            <th>Email:</th>
            <th>Phone:</th>
            <th>Role:</th>
          </tr>
          {data.map(member => {
            return (
              <tr key={member.email}>
                <td>{member.name}</td>
                <td>{member.email}</td>
                <td>{member.phone}</td>
                <td>{member.role}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Form />
    </>
  );
}