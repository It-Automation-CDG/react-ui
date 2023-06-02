import React, { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [isclicked, setIsclicked] = useState(false);
  const barClicked = () => {
    alert("clicked");
  };
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <span>
            <FontAwesomeIcon
              onClick={barClicked}
              className="bar"
              icon={faBars}
            />
          </span>
          <div className="navbar-items">
            <ul>
              <li>Header</li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
