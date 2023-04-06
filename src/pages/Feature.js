import React from "react";
import Card from "../component/card";
import Navbar from "../component/Navbar";

export default function Feature() {
  let section3 = {
    header: "Neque porro ",
    subheader: "quisquam conteturquam",
    content:
      "Lorem ipsum dolor sLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut eget pellentesque urna vestibulum malesuada. Posuere donec nisi dolor non neque suspendisse ut. Id ultricies sapien nisl lectus dui tristique sit. Volutpat mattis consequat et, purus neque sit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut eget pellentesque urna vestibulum malesuada. Posuere donec nisi dolor non neque suspendisse ut. Id ultricies sapien nisl lectus dui tristique sit. Volutpat mattis consequat et, purus neque sit.",
    buttonName: null,
    buttonhide: null,
    btnColor: null,
    width: "w-75",
    color: "primary",
    margin: "mt-4",
  };
  return (
    <>
      <Navbar />
      <div className="feature">
        <div className=" ">
          <Card props={section3} />
        </div>
      </div>
    </>
  );
}
