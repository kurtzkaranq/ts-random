import { click } from "@testing-library/user-event/dist/click";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header(): JSX.Element {
  const [select, setSelect] = useState<any>();
  const titles = ["Users", "Add User"];

  const style = {
    listStyleType: "none",
    backgroundColor: "aliceblue",
    li: {
      marginRight: "5%",
      width: "15%",
      marginTop: "2%",
      border: "1px solid black",
      borderRadius: "10px",
      backgroundColor: "grey",
      marginBottom: "2%",
    },
    a: {
      textDecoration: "none",
      color: "white",
    },
  };
  return (
    <header className="">
      <ul className="d-flex" style={style}>
        <Link to="/" style={style.li} onClick={() => setSelect("Home")}>
          <li style={style.a}>Home</li>
        </Link>
        <Link to="/Users" style={style.li} onClick={() => setSelect("Users")}>
          <li style={style.a}>Users</li>
        </Link>
        <Link
          to="/Add User"
          style={style.li}
          onClick={() => setSelect("Add User")}
        >
          <li style={style.a}>Add User</li>
        </Link>
      </ul>
    </header>
  );
}
