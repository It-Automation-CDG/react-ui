// import User from "./component/User";
// import { useEffect, useState } from "react";
import Navbar from "./component/Navbar";
import Main from "./component/Main";
import "./App.css";

function App() {
  // const [data, setData] = useState([]);
  // const [name, setName] = useState("");
  // const [userid, setUserid] = useState();
  // const [desig, setDesig] = useState("");
  // const [know, setKnow] = useState("");
  // const [experience, setExperience] = useState();
  // const [primary, setPrimary] = useState();
  // const [additional, setAdditional] = useState();
  // const [clicked, setClicked] = useState(false);

  // const api1 = "http://192.168.0.118:9095/home/getId";
  // // const api2 = "http://192.168.0.118:9095/home/uploadResume";
  // const api2 = "http://192.168.0.118:9095/home/added";
  // const api3 = "http://192.168.0.118:9095/home/update/";

  // //update
  // const editHandler = (id, index) => {
  //   console.log(id);
  //   console.log(data[index]);
  //   setClicked(true);
  //   setName(data[index].employeeName != null ? data[index].employeeName : " ");
  //   setDesig(data[index].designation != null ? data[index].designation : " ");
  //   setKnow(data[index].knowledgeIn != null ? data[index].knowledgeIn : " ");
  //   setExperience(
  //     data[index].experience != null ? data[index].experience : " "
  //   );
  //   setPrimary(
  //     data[index].primarySkills != null ? data[index].primarySkills : " "
  //   );
  //   setAdditional(
  //     data[index].additionalSkills != null ? data[index].additionalSkills : " "
  //   );
  //   setUserid(data[index].employeeId);
  // };

  // const fetchPutApi = async (url, updateBody) => {
  //   const res = await fetch(url, {
  //     method: "PUT",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(updateBody),
  //   });
  //   const data = await res.json();
  //   debugger;

  //   console.log("updated data" + data);
  // };

  // const updateUser = () => {
  //   let updateBody = {
  //     employeeName: name,
  //     employeeId: userid,
  //     designation: desig,
  //     experience: experience,
  //     knowledgeIn: know,
  //     primarySkills: primary,
  //     additionalSkills: additional,
  //   };
  //   console.log(
  //     "ok: ",
  //     name,
  //     userid,
  //     desig,
  //     experience,
  //     know,
  //     primary,
  //     additional
  //   );
  //   //debugger;
  //   fetchPutApi(`${api3}${userid}`, updateBody);
  //   fetchApi1(api1);
  //   setClicked(false);
  // };

  // async function fetchApi1(url) {
  //   try {
  //     const res = await fetch(url);
  //     const result = await res.json();
  //     //console.log(result);
  //     setData(result);
  //   } catch (error) {
  //     console.warn(error);
  //   }
  // }
  // console.log(data);

  // let addDetails = {};
  // useEffect(() => {
  //   fetchApi1(api1);
  // }, []);

  // //add data

  // const fetchApi2 = async (url, addDetails) => {
  //   try {
  //     const res = await fetch(
  //       url,
  //       addDetails
  //       // {

  //       // headers: {
  //       //   Accept:
  //       //     "application/json, application/xml, text/plain, text/html, *.*",
  //       //   "Content-Type": "multipart/form-data",
  //       // },
  //       // body: JSON.stringify(addDetails),
  //       //  }
  //     );
  //     const data = await res.json();
  //     fetchApi1(api1);
  //     console.log(data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  // const showDetails = (
  //   name,
  //   know,
  //   desig,
  //   experience,
  //   primary,
  //   additional,
  //   file
  // ) => {
  //   var formdata = new FormData();
  //   formdata.append("file", file);
  //   formdata.append("employeeName", name);
  //   formdata.append("designation", desig);
  //   formdata.append("experience", experience);
  //   formdata.append("primarySkills", primary);
  //   formdata.append("knowledgeIn", know);
  //   formdata.append("additionalSkills", additional);

  //   var requestOptions = {
  //     method: "POST",
  //     body: formdata,
  //     redirect: "follow",
  //   };

  //   addDetails = {
  //     employeeName: name,
  //     designation: desig,
  //     knowledgeIn: know,
  //     experience: experience,
  //     primarySkills: primary,
  //     additionalSkills: additional,
  //     resumeUpload: file,
  //   };
  //   console.log(addDetails);
  //   fetchApi2(api2, requestOptions);
  //   fetchApi1(api1);
  // };

  return (
    <>
      <Navbar></Navbar>
      <Main></Main>
      {/* <div className="App">
      
        <User showDetails={showDetails} />

        {clicked && (
          <>
            <h2>Update data</h2>
            <form>
              <input
                type="text"
                value={name}
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
              <br />
              <button type="submit" onClick={updateUser}>
                Update user
              </button>
            </form>
          </>
        )}

        <div className="table">
         
          <table>
            <tr>
              <th>Employee id</th>
              <th>Employee name</th>
              <th>Designation</th>
              <th>Experience</th>
              <th>Primary Skill</th>
              <th>Additional Skill</th>
              <th>Knowledge IN</th>
              <th>Resume</th>
            </tr>
            {data.length === 0 ? (
              <p style={{ textAlign: "center", margin: "12px" }}>
                no data present.....
              </p>
            ) : (
              data.map((i, index) => (
                <tr>
                  <td>{i.employeeId}</td>
                  <td>{i.employeeName}</td>
                  <td>{i.designation}</td>
                  <td>{i.experience}</td>
                  <td>{i.primarySkills}</td>
                  <td>{i.additionalSkills}</td>
                  <td>{i.knowledgeIn}</td>
                  <td className="resume">{i.resumeUpload}</td>
                  <td>
                    <button onClick={() => editHandler(i.employeeId, index)}>
                      Edit
                    </button>
                  </td>
                </tr>
              ))
            )}
          </table>
        </div>
      </div> */}
    </>
  );
}

export default App;
