import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidenav.css";

export default function Sidenav() {
  const activeStyle = ({ isActive }) => {
    return {
      color: isActive ? "white" : "black",
      fontWeight: isActive ? "bold" : "lighter",
      fontSize: isActive ? "larger" : "medium",
      textDecoration: isActive ? "overline" : "none",
    };
  };
  return (
    <>
      <div className="sidenav-container">
        <div className="sidenav-list">
          <ul>
            <li>
              <NavLink style={activeStyle} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink style={activeStyle} to="user">
                Enter Details
              </NavLink>
            </li>
            <li>
              <NavLink style={activeStyle} to="table">
                Employees
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
