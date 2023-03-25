import React from "react";

export default function card({ props }) {
  // console.log(props, "skhcdc");
  return (
    <>
      <div className={`${props.main} ms-5 ${props.margin} ${props.width}`}>
        <h1 className={`text-${props.color} ${props.margin}`}>
          {props.header}
          <br />
          {props.subheader}
        </h1>
        <p className={`text-${props.color}`}>{props.content}</p>
        <button
          className={`${props.buttonhide} ${props.btnColor} mt-3 border-0`}
        >
          {props.buttonName}
        </button>
      </div>
    </>
  );
}
