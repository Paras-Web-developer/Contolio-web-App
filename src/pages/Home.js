import React from "react";
import building from "../assets/image/building.png";
import sofa from "../assets/image/sofa.png";
import ishadow from "../assets/image/i-phone-shadow.png";
import iphone from "../assets/image/iphone.png";
import Card from "../component/card";
import Storebox from "../component/storebox";
import { AppleStore, PlayStore } from "../Utils/Images";
import { NavLink } from "react-router-dom";

export default function Home() {
  let section1 = {
    main: "main",
    header: "Neque porro",
    subheader: "quisquam contetur est",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut eget pellentesque urna vestibulum malesuada. Posuere donec nisi dolor non neque suspendisse ut. Id ultricies sapien nisl lectus dui tristique sit. Volutpat mattis consequat et, purus neque sit.",
    buttonName: "Demo",
    buttonhide: "btn",
    btnColor: "btn-primary",
    color: "white",
  };

  let section2 = {
    main: "main",
    header: "Neque porro",
    subheader: "quisquam contetur",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut eget pellentesque urna vestibulum malesuada. Posuere donec nisi dolor non neque suspendisse ut. Id ultricies sapien nisl lectus dui tristique sit. Volutpat mattis consequat et, purus neque sit.",
    buttonName: "Booking",
    buttonhide: "btn",
    btnColor: "btn-primary",
    color: "black",
    margin: "mt-4",
  };
  let section3 = {
    main: "main",
    header: "Neque porro ",
    subheader: "quisquam",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut eget pellentesque urna vestibulum malesuada. Posuere donec nisi dolor non neque suspendisse ut. Id ultricies sapien nisl lectus dui tristique sit. Volutpat mattis consequat et, purus neque sit.",
    buttonName: null,
    buttonhide: null,
    btnColor: null,
    width: "w-75",
  };
  let section4 = {
    header: "Neque porro",
    subheader: "quisquam contetur",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut eget pellentesque urna vestibulum malesuada. Posuere donec nisi dolor non neque suspendisse ut. Id ultricies sapien nisl lectus dui tristique sit. Volutpat mattis consequat et, purus neque sit.",
  };
  let Appstore = {
    src: AppleStore,
    play: "App Store",
    download: "Download On the",
  };
  let playstore = {
    src: PlayStore,
    download: "Download On the",
    play: "Play Store",
  };
  return (
    <>
      <section className="home ms-5 ps-4">
        <Card props={section1} />
      </section>
      <section className="building d-flex justify-content-around mt-5">
        <div className="building-img">
          <img src={building} alt="" />
        </div>
        <Card props={section2} />
      </section>

      <div className="mt-5">
        <img src={sofa} alt="" className="w-100" />
        <div className="sofa-img-mt">
          <Card props={section3} />
        </div>
      </div>

      <section className="iphone d-flex justify-content-between align-items-center">
        <div className="phone">
          <img src={iphone} alt="" className="shadow-phone" />
          <img src={ishadow} alt="" className="ishadow" />
        </div>
        <div className="phone-text pt-5 mt-5">
          <Card props={section4} />
          <div className="d-flex">
            <NavLink to="https://www.apple.com/in/app-store/">
              <Storebox props={Appstore} />
            </NavLink>

            <NavLink to="https://play.google.com/">
              <Storebox props={playstore} />
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
}
