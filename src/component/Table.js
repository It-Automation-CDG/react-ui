import React from "react";
import { useEffect, useState } from "react";
import "./Table.css";

export default function Table() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userid, setUserid] = useState();
  const [desig, setDesig] = useState("");
  const [know, setKnow] = useState("");
  const [experience, setExperience] = useState();
  const [primary, setPrimary] = useState();
  const [additional, setAdditional] = useState();
  const [clicked, setClicked] = useState(false);

  const api1 = "/home/getId";
  //   const api2 = "http://192.168.0.118:9095/home/added";
  const api3 = "/home/update/";

  //update
  const editHandler = (id, index) => {
    console.log(id);
    console.log(data[index]);
    setClicked(true);
    setName(data[index].employeeName != null ? data[index].employeeName : " ");
    setEmail(data[index].email != null ? data[index].email : " ");
    setDesig(data[index].designation != null ? data[index].designation : " ");
    setKnow(data[index].knowledgeIn != null ? data[index].knowledgeIn : " ");
    setExperience(
      data[index].experience != null ? data[index].experience : " "
    );
    setPrimary(
      data[index].primarySkills != null ? data[index].primarySkills : " "
    );
    setAdditional(
      data[index].additionalSkills != null ? data[index].additionalSkills : " "
    );
    setUserid(data[index].employeeId);
  };

  const fetchPutApi = async (url, updateBody) => {
    const res = await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateBody),
    });
    const data = await res.json();

    console.log("updated data" + data);
  };

  const updateUser = async () => {
    let updateBody = {
      employeeName: name,
      email: email,
      employeeId: userid,
      designation: desig,
      experience: experience,
      knowledgeIn: know,
      primarySkills: primary,
      additionalSkills: additional,
    };
    console.log(
      "ok: ",
      name,
      email,
      userid,
      desig,
      experience,
      know,
      primary,
      additional
    );
    //debugger;
    await fetchPutApi(`${api3}${userid}`, updateBody);
    await fetchApi1(api1);
    setClicked(false);
  };

  async function fetchApi1(url) {
    try {
      const res = await fetch(url);
      const result = await res.json();
      //console.log(result);
      setData(result);
    } catch (error) {
      console.warn(error);
    }
  }
  console.log(data);

  //   let addDetails = {};
  useEffect(() => {
    fetchApi1(api1);
  }, []);

  return (
    <div>
      {clicked && (
        <>
          <div className="update-form">
            <h2>Update data</h2>
            <form>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Employee-Name"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email-id"
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
              <br />
              <button type="submit" onClick={updateUser}>
                Update user
              </button>
            </form>
          </div>
        </>
      )}

      <div className="table">
        {/* <table border="1"> */}
        <table>
          <thead>
            <tr>
              <th>Employee Id</th>
              <th>Employee Name</th>
              <th>Employee Email</th>
              <th>Designation</th>
              <th>Experience</th>
              <th>Primary Skill</th>
              <th>Additional Skill</th>
              <th>Knowledge IN</th>
              <th>Resume</th>
            </tr>
          </thead>
          {data.length === 0 ? (
            <p style={{ textAlign: "center", margin: "12px" }}>
              no data present.....
            </p>
          ) : (
            data.map((i, index) => (
              <tbody>
                <tr>
                  <td>{i.employeeId}</td>
                  <td>{i.employeeName}</td>
                  <td>{i.email}</td>
                  <td>{i.designation}</td>
                  <td>{i.experience}</td>
                  <td>{i.primarySkills}</td>
                  <td>{i.additionalSkills}</td>
                  <td>{i.knowledgeIn}</td>
                  <td className="resume">{i.resumeLink}</td>
                  <td>
                    <button onClick={() => editHandler(i.employeeId, index)}>
                      Edit
                    </button>
                  </td>
                </tr>
              </tbody>
            ))
          )}
        </table>
      </div>
    </div>
  );
}
