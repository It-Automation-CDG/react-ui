import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidenav.css";

export default function Sidenav() {
  return (
    <>
      <div className="sidenav-container">
        <div className="sidenav-list">
          <ul>
            <li>
              <NavLink>Enter Details</NavLink>
            </li>
            <li>
              <NavLink>Employees</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
