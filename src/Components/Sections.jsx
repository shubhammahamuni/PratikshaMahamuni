import React, { useEffect, useState } from "react";
import "./style.css";
import TextLabel from "./TextLabel";

export default function Sections(props) {
  const [fields, setFields] = useState([]);

  useEffect(() => {
    if (props?.data) {
      setFields(props.data.fields);
    }
  }, [props.data]);

  return props.data ? (
    <div className="min-w-full my-5 px-5">
      <h1 className="text-2xl font-bold">{props.data.headerName}</h1>
      {fields.map((item, index) => {
        if (item.lableName && item.lableValue) {
          return (
            <TextLabel
              key={index}
              filedName={item.lableName}
              fieldValue={item.lableValue}
            />
          );
        }
        return null;
      })}
    </div>
  ) : null;
}
