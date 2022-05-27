import React, { useState, useEffect } from "react";
import { useUser } from "./Context";
import { User } from "./type/type";

export default function AddUser(): JSX.Element {
  const { users, setUsers } = useUser();
  const [page, setPage] = useState(true);
  const [user, setUser] = useState<User>();
  const [button, setButton] = useState<boolean>(true);
  const buttons = ["Generate new", "Cancel"];
  const combine = `${user?.name.first} ${user?.name.last}`;

  function clickHandler(i: number) {
    if (i == 0) {
      fetch("https://randomuser.me/api/")
        .then((data) => data.json())
        .then((data) => {
          setUser(data.results[0]);

          if (users.includes(data.results[0].picture.large)) {
            setButton(false);
          } else {
            setButton(true);
          }
        });
    } else {
      setPage(!page);
      fetch("https://randomuser.me/api/");
    }
  }

  function refresh() {
    setPage(!page);
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUser(data.results[0]);
      });
  }
  // useEffect(() => {
  //   setButton(button);
  // }, [button]);
  function onClick(e: any) {
    if (button) {
      setButton(false);
      e.target.disabled = true;
      if (user) {
        setUsers([...users, user]);
      }
    } else {
      e.target.disabled = true;
    }
    e.target.disabled = false;
  }

  const style = {
    marginBottom: "5%",
    img: {
      width: "350px",
      // marginRight: "auto",
      marginLeft: "11%",
    },
    button: {
      border: "none",
      marginLeft: "10%",
      height: "100px",
      width: "20%",
      borderRadius: "20px",
      backgroundColor: "#61CA7E",
      fontSize: "18px",
      fontWeight: "500",
      color: "white",
    },
    span: {
      fontSize: "30px",
      textAlign: "left" as "left",
    },
    add: {
      border: "none",
      marginLeft: "10%",
      height: "100px",
      width: "20%",
      borderRadius: "20px",
      backgroundColor: button ? "#61CA7E" : "black",
      fontSize: "18px",
      fontWeight: "500",
      color: "white",
    },
    spanInside: {
      fontSize: "20px",
    },
  };

  return (
    <div>
      {page ? (
        <button onClick={refresh}>Generate </button>
      ) : (
        <div>
          <div className="d-flex ms-5 " style={style}>
            <img
              src={user ? user?.picture.large : "icon/name.png"}
              alt=""
              style={style.img}
            />

            <div
              className="d-flex flex-column ms-3 mt-auto mb-auto"
              style={style.span}
            >
              <span>
                <span style={style.spanInside}>name:</span>{" "}
                {user ? combine : "unknown"}
              </span>
              <span>
                <span style={style.spanInside}>age:</span>{" "}
                {user ? user?.dob.age : "unknown"}
              </span>
              <span>
                <span style={style.spanInside}>gender:</span>{" "}
                {user ? user?.gender : "unknown"}
              </span>
              <span>
                <span style={style.spanInside}>email:</span>{" "}
                {user ? user?.email : "unknown"}
              </span>
              <span>
                <span style={style.spanInside}>phone number:</span>
                {user ? user?.cell : "unknown"}
              </span>
              <span>
                <span style={style.spanInside}>birhtday:</span>{" "}
                {user ? user?.dob.date : "unknown"}
              </span>
            </div>
          </div>
          <div>
            <button onClick={onClick} style={style.add}>
              Add user to list
            </button>
            {buttons.map((button, i) => {
              return (
                <button
                  style={style.button}
                  key={i}
                  onClick={() => {
                    clickHandler(i);
                  }}
                >
                  {button}
                </button>
              );
            })}
            {/* <button style={style.add} onClick={onClick}>
              test
            </button> */}
          </div>
        </div>
      )}
    </div>
  );
}
