import React, { useEffect, useState } from "react";
import { useUser } from "./Context";

export default function Users(): JSX.Element {
  const { users, setUsers } = useUser();
  useEffect(() => {
    setUsers(JSON.parse(localStorage.getItem("users") || "[]"));
  }, []);
  let random = Math.floor(Math.random() * users.length);

  return (
    <div className="">
      <h3>Gentlemen</h3>
      {users &&
        users
          .filter((user) => user.gender == "male")
          .map((e, i) => {
            return <img src={e.picture.large} alt="" key={i} className="m-3" />;
          })}
      <h3>Ladies</h3>
      {users &&
        users
          .filter((user) => user.gender == "female")
          .map((e, i) => {
            return <img src={e.picture.large} alt="" key={i} className="m-3" />;
          })}
    </div>
  );
}
