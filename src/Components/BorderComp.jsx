import React, { Children } from "react";
import border from "../Assets/border.png";
import ganeshimage from "../Assets/ganeshFinal.png";
import "../App.css";

export default function BorderComp(props) {
  return (
    <div className="min-w-full flex flex-col justify-between p-2 border-4 borderColor flex-grow">
      <div className="min-w-full flex justify-between ">
        <img
          className="border"
          style={{ transform: "rotate(-90deg)" }} // Use 'transform' for rotation
          alt="ganesh"
          src={border}
        />
        <img
          className="border"
          style={{
            justifySelf: "center",
            alignSelf: "center",
            height: 80,
            width: 70,
          }} // Use 'transform' for rotation
          alt="ganesh"
          src={ganeshimage}
        />
        <img
          className="border"
          style={{ transform: "rotate(0deg)" }} // Use 'transform' for rotation
          alt="ganesh"
          src={border}
        />
      </div>

      <div className="flex-grow flex">{props.children}</div>

      <div className="min-w-full flex justify-between">
        <img
          className="border"
          style={{
            transform: "rotate(180deg)",
            filter: "sepia(1) hue-rotate(-50deg) saturate(5)",
          }} // Adjusted filter for a red tint
          alt="ganesh"
          src={border}
        />
        <img
          className="border"
          style={{ transform: "rotate(90deg)" }} // Use 'transform' for rotation
          alt="ganesh"
          src={border}
        />
      </div>
    </div>
  );
}
