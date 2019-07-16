import React, { useState } from "react";
import data from "./data/data";
import './App.css'

// import "./styles/App.css";

import Form from "./components/Form";

export default function App() {
  const [team, updateTeam] = useState(data);
  const [memberToEdit, updateMemberToEdit] = useState({ name: "" });

  const handleSubmit = (event, member) => {
    event.preventDefault();
    updateTeam([...team, member]);
  };

  const editMember = member => {
    console.log("Edit this member: ", member);
  };

  return (
    <>
      <table className="content-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Role</th>
          </tr>
          {team.map(member => {
            return (
              <tr
                key={member.email}
                onClick={event => updateMemberToEdit(member)}
              >
                <td>{member.name}</td>
                <td>{member.email}</td>
                <td>{member.phone}</td>
                <td>{member.role}</td>
              </tr>
            );
          })}
        </thead>
      </table>
      <Form
        teamList={team}
        handleSubmit={handleSubmit}
        memberToEdit={memberToEdit}
        editMember={editMember}
      />
    </>
  );
}