import React, { useState } from "react";
import "./User.css";
export default function User(props) {
  const [name, setName] = useState();
  const [desig, setDesig] = useState();
  const [know, setKnow] = useState();
  const [email, setEmail] = useState();
  const [experience, setExperience] = useState();
  const [primary, setPrimary] = useState();
  const [additional, setAdditional] = useState();
  const [file, setFile] = useState();
  // const [error, setError] = useState();

  const handleFileHandler = (e) => {
    debugger;
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  // const nameHandler = (e) => {
  //   if (e.target.value) setName(e.target.value);
  // };

  return (
    <>
      <h3>Enter the Details</h3>
      <div className="user-container">
        <form
          className="user-form"
          onSubmit={(e) => {
            e.preventDefault();
            debugger;
            console.log(
              "data: " + name,
              know,
              desig,
              experience,
              primary,
              additional,
              file
            );
            props.showDetails(
              name,
              know,
              desig,
              experience,
              primary,
              additional,
              file
            );
          }}
        >
          <div className="form-input">
            <input
              type="text"
              value={name}
              //  onChange={nameHandler}
              onChange={(e) => setName(e.target.value)}
              placeholder="Employee-Name"
            />
            <input
              type="text"
              value={know}
              onChange={(e) => setKnow(e.target.value)}
              placeholder="knowledgeIn"
            />
            <input
              type="text"
              value={desig}
              onChange={(e) => setDesig(e.target.value)}
              placeholder="Designation"
            />
            <br />
            <input
              type="text"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              placeholder="Experience"
            />
            <input
              type="text"
              value={primary}
              onChange={(e) => setPrimary(e.target.value)}
              placeholder="primary-skill"
            />
            <input
              type="text"
              value={additional}
              onChange={(e) => setAdditional(e.target.value)}
              placeholder="additional-Skill"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
            />

            <input type="file" onChange={handleFileHandler} />
          </div>
          <br />
          <div className="btn" style={{ textAlign: "center" }}>
            <button type="submit">Insert</button>
          </div>
        </form>
      </div>
    </>
  );
}
