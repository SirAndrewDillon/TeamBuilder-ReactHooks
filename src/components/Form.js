import React, { useState, useEffect } from "react";

export default function Form(props) {
  const [member, setMember] = useState({
    name: "",
    email: "",
    phone: "",
    role: ""
  });
  console.log(member);

//   useEffect(() => {
//     if (props.memberToEdit) {
//       setMemberState({
//         name: props.memberToEdit.name,
//         email: props.memberToEdit.email,
//         role: props.memberToEdit.role
//       });
//     }
//   }, [props.memberToEdit]);

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
      <button className="btn">Submit</button> <span classNane ="money"><h3><marquee>To see a World in a Grain of Sand
And a Heaven in a Wild Flower,
Hold Infinity in the palm of your hand
And Eternity in an hour.!</marquee></h3></span>
    </form>
  );
}