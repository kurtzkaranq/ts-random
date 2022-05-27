import React, { useEffect, useState } from "react";
import { selectType, User } from "./type/type";

type Props = {
  isSelected: selectType;
  changed: any;
};

export default function Content(props: Props) {
  const [datas, setDatas] = useState<any>();
  const [select, setSelect] = useState<string>();

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setDatas(data);
      });
  }, []);

  const style = {
    fontSize: "20px",
    span: {
      fontSize: "30px",
    },
  };
  //   console.log(props.isSelected);

  return (
    <div>
      {" "}
      <p>
        {datas && datas[props.isSelected].subtitle} <br />
        <span style={style.span}>{props.changed}</span>
      </p>
    </div>
  );
}
