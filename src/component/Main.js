import React from "react";
import Sidenav from "./Sidenav";
import "./Main.css";
import Body from "./Body";
export default function Main() {
  return (
    <>
      <div className="main-container">
        <Sidenav></Sidenav>
        <Body></Body>
      </div>
    </>
  );
  //   return (
  //     <>
  //       <div>
  //         <Sidenav></Sidenav>
  //         <Body></Body>
  //       </div>
  //     </>
  //   );
}
