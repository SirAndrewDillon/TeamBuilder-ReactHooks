import React, { useState } from "react";

export default function Form(props) {
  const [member, setMember] = useState({
    name: "",
    email: "",
    phone: "",
    role: ""
  });
  console.log(member);

  const handleChange = event => {
    setMember({ ...member, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(member.name);
    console.log(member.role);
  };

  return (
    <form className="submission-form" onSubmit={event => handleSubmit(event)}>
      <label>
        First Name:
        <input
          type="text"
          name="name"
          value={member.name}
          onChange={event => handleChange(event)}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={member.mail}
          onChange={event => handleChange(event)}
        />
      </label>
      <label>
        Phone:
        <input
          type="text"
          name="phone"
          value={member.phone}
          onChange={event => handleChange(event)}
        />
      </label>
      <label>
        Role:
        <input
          type="text"
          name="role"
          value={member.role}
          onChange={event => handleChange(event)}
        />
      </label>
      <button className="btn">Submit</button> <span classNane ="money"><h3>IF IT DON'T MAKE MONEY IT DON'T MAKE CENTS!</h3></span>
    </form>
  );
}