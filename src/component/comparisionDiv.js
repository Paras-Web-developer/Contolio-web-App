import React from "react";

export default function comparisionDiv({ props }) {
  return (
    <>
      <div className="m-auto text-black bg-white ps-4 pe-2 pt-4 pb-4 mb-4 comparision_div ">
        <h3 className="text-primary">{props.head1}</h3>
        <li>{props.content}</li>
        <h3 className="text-primary">{props.head2}</h3>
        <li>{props.content1}</li>
        <li>{props.content2}</li>
        <li>{props.content3}</li>
        <h3 className="text-primary">{props.head3}</h3>
        <li>{props.content4}</li>
      </div>
    </>
  );
}