import React from "react";
// import istore from "../assets/image/apple-logo.png";
export default function storebox({ props }) {
  return (
    <>
      <div className="istore d-flex justify-content-evenly align-items-center bg-black text-white me-2">
        <div className="istore-l">
          <img src={props.src} alt="" className="" />
        </div>
        <div className="istore-r">
          <h5>{props.download}</h5>
          <h2>{props.play}</h2>
        </div>
      </div>
    </>
  );
}
