import React from "react";

export default function TextLabel(props) {
  const { filedName, fieldValue } = props;

  return (
    <div className="flex my-2">
      <p className="w-1/3 ">{filedName}</p>
      <p className="mr-4">:</p>
      <p className=" w-1/2">{formatTextWithLineBreaks(fieldValue)}</p>
    </div>
  );
}

const formatTextWithLineBreaks = (text) => {
  return text
    ? text.split("\n").map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))
    : "";
};
