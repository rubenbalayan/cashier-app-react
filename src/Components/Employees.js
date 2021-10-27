import React, { useEffect } from "react";
import "../App.css";
import "../Styles/Employees.css";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

function Employees({ data, setData }) {
  useEffect(() => {
    fetch("http://localhost:8085/api/employee")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handelOnDelete = (username) => {
    const url = "http://localhost:8085/api/employee/delete/".concat(username);
    fetch(url, { method: "DELETE" })
      .then((res) => {
        setData(data.filter((row) => row.username !== username));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="employeeList">
      {data &&
        data.map((item) => (
          <li>
            {item.firstName} {item.lastName} {item.roles}
            <Button
              size="large"
              className="deleteButton"
              variant="outlined"
              startIcon={<DeleteIcon />}
              onClick={() => handelOnDelete(item.username)}
            />
          </li>
        ))}
    </div>
  );
}

export default Employees;
