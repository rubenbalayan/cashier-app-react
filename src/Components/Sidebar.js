import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../App.css";
import { SideboardData } from "./SideboardData.js";

function Sidebar() {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div className="Sidebar sidebar">
      <ul className="SidebarList">
        {SideboardData.map((val, key) => (
          <li
            key={key}
            className={`row ${pathname === val.link ? "active" : ""}`}
          >
            <Link to={val.link}>
              {" "}
              <span class="icon">{val.icon}</span>
              <span class="title">{val.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
