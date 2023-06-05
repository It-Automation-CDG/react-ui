import React from "react";
import Sidenav from "./Sidenav";
import "./Main.css";
import Body from "./Body";
export default function Main(props) {
  console.warn(props);
  return (
    <>
      <div className="main-container">
        {props.showSidenav === true ? (
          <Sidenav
            style={{ transition: "ease-in-out 1s" }}
            className="sidenav"
          ></Sidenav>
        ) : null}

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
