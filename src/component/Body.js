import React from "react";
import User from "./User";
import Table from "./Table";
import Home from "./Home";
import "./Body.css";
//import { useState } from "react";
import { Routes, Route } from "react-router-dom";

export default function Body() {
  // const [data, setData] = useState([]);
  //   const [name, setName] = useState("");
  //   const [userid, setUserid] = useState();
  //   const [desig, setDesig] = useState("");
  //   const [know, setKnow] = useState("");
  //   const [experience, setExperience] = useState();
  //   const [primary, setPrimary] = useState();
  //   const [additional, setAdditional] = useState();
  //   const [clicked, setClicked] = useState(false);

  //   const api1 = "http://192.168.0.109:9095/home/getId";

  const api2 = "/home/added";

  //update
  //   const editHandler = (id, index) => {
  //     console.log(id);
  //     console.log(data[index]);
  //     setClicked(true);
  //     setName(data[index].employeeName != null ? data[index].employeeName : " ");
  //     setDesig(data[index].designation != null ? data[index].designation : " ");
  //     setKnow(data[index].knowledgeIn != null ? data[index].knowledgeIn : " ");
  //     setExperience(
  //       data[index].experience != null ? data[index].experience : " "
  //     );
  //     setPrimary(
  //       data[index].primarySkills != null ? data[index].primarySkills : " "
  //     );
  //     setAdditional(
  //       data[index].additionalSkills != null ? data[index].additionalSkills : " "
  //     );
  //     setUserid(data[index].employeeId);
  //   };

  //   const fetchPutApi = async (url, updateBody) => {
  //     const res = await fetch(url, {
  //       method: "PUT",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(updateBody),
  //     });
  //     const data = await res.json();
  //     debugger;

  //     console.log("updated data" + data);
  //   };

  //   const updateUser = () => {
  //     let updateBody = {
  //       employeeName: name,
  //       employeeId: userid,
  //       designation: desig,
  //       experience: experience,
  //       knowledgeIn: know,
  //       primarySkills: primary,
  //       additionalSkills: additional,
  //     };
  //     console.log(
  //       "ok: ",
  //       name,
  //       userid,
  //       desig,
  //       experience,
  //       know,
  //       primary,
  //       additional
  //     );
  //     //debugger;
  //     fetchPutApi(`${api3}${userid}`, updateBody);
  //     fetchApi1(api1);
  //     setClicked(false);
  //   };

  //   async function fetchApi1(url) {
  //     try {
  //       const res = await fetch(url);
  //       const result = await res.json();
  //       //console.log(result);
  //       setData(result);
  //     } catch (error) {
  //       console.warn(error);
  //     }
  //   }
  //   console.log(data);

  //   //   let addDetails = {};
  //   useEffect(() => {
  //     fetchApi1(api1);
  //   }, []);

  //add data

  const fetchApi2 = async (url, addDetails) => {
    try {
      const res = await fetch(
        url,
        addDetails
        // {

        // headers: {
        //   Accept:
        //     "application/json, application/xml, text/plain, text/html, *.*",
        //   "Content-Type": "multipart/form-data",
        // },
        // body: JSON.stringify(addDetails),
        //  }
      );
      const data = await res.json();
      //   fetchApi1(api1);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };
  const showDetails = (
    name,
    email,
    know,
    desig,
    experience,
    primary,
    additional,
    file
  ) => {
    var formdata = new FormData();
    // formdata.append("file", file);
    formdata.append("employeeName", name);
    formdata.append("email", email);
    formdata.append("designation", desig);
    formdata.append("experience", experience);
    formdata.append("primarySkills", primary);
    formdata.append("knowledgeIn", know);
    formdata.append("additionalSkills", additional);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    // addDetails = {
    //   employeeName: name,
    //   designation: desig,
    //   knowledgeIn: know,
    //   experience: experience,
    //   primarySkills: primary,
    //   additionalSkills: additional,
    //   resumeUpload: file,
    // };
    // console.log(addDetails);
    fetchApi2(api2, requestOptions);
    // fetchApi1(api1);
  };
  return (
    <div className="body-container">
      <div className="body-items">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="user"
            element={<User showDetails={showDetails} />}
          ></Route>
          <Route path="table" element={<Table />}></Route>
        </Routes>
      </div>
    </div>
  );
}
