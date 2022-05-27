import moment from "moment";
import React, { useState, useEffect } from "react";
import Content from "./Content";
import { useUser } from "./Context";
import { UserContextType, User, selectType } from "./type/type";
import Users from "./Users";

export default function Main(): JSX.Element {
  // const [data, setData] = useState<User>();
  const { users, setUsers } = useUser();
  const [selected, setSelected] = useState<selectType>("name");
  const [datas, setDatas] = useState<any>();
  const [user, setUser] = useState<User>();
  useEffect(() => {
    // console.log(users);

    if (users) {
      setUser(users[Math.floor(Math.random() * users.length)]);
    }
  }, [users]);

  const buttons: Array<selectType> = [
    "name",
    "email",
    "calendar",
    "address",
    "phone",
    "lock",
  ];
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setDatas(data);
      });
  }, [users]);
  const style = {
    fontSize: "20px",
    hr: {
      position: "absolute" as "absolute",
      marginTop: "13%",
      width: "100%",
      zIndex: "-100",
    },
    img: {
      borderRadius: "50%",
      height: "20%",
      width: "25%",
    },
    icon: {
      width: "100%",
      height: "80%",
    },
    button: {
      width: "50px",
      height: "50px",
      marginLeft: "5%",
      backgroundColor: "white",
      // border: "none",
    },
  };

  let changed;

  const combineName = `${user?.name.first} ${user?.name.last}`;
  const combineAddress = `${user?.location.country} ${user?.location.city} ${user?.location.street.name}`;
  if (users && selected == "name") {
    changed = combineName;
  } else if (selected == "email") {
    changed = user?.email;
  } else if (selected == "calendar") {
    changed = user?.dob.date;
  } else if (selected == "address") {
    changed = combineAddress;
  } else if (selected == "lock") {
    changed = user?.login.password.slice(0, 10);
  } else {
    changed = user?.cell;
  }

  return (
    <div style={style}>
      <hr style={style.hr} />
      <img src={user?.picture.large} alt="" style={style.img} />
      <Content isSelected={selected} changed={changed} />

      {buttons.map((icon: string, i) => {
        return (
          <button
            style={style.button}
            key={i}
            onClick={() => {
              setSelected(icon as selectType);
            }}
          >
            <img src={`icon/${icon}.png`} alt="" style={style.icon} />
          </button>
        );
      })}
    </div>
  );
}
