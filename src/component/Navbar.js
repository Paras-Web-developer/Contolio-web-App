import React from "react";
import Union from "../assets/image/Union.png";
import border from "../assets/image/border.png";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <header className="">
        <nav className="nav d-flex justify-content-between align-items-center pt-3 pb-3">
          <div className="left">
            <img src={Union} alt="Logo" className="w-75" />
          </div>

          <div className="right">
            <NavLink to="/booking">
              <button className="btn btn-primary">Login</button>
            </NavLink>
            <NavLink to="/Form" className={"link"}>
              <button className="btn btn-primary ms-2">Book a Demo</button>
            </NavLink>
          </div>
        </nav>
        <ul className="nav-title d-flex flex-row justify-content-end text-white">
          <div>
            <NavLink to="/" className={"link"}>
              <div className="border">
                <img src={border} alt="" />
              </div>
              Home
            </NavLink>
          </div>
          <div>
            <NavLink to="/Feature" className={"link"}>
              <div className="border">
                <img src={border} alt="" />
              </div>
              Feature
            </NavLink>
          </div>
          <div>
            <NavLink to="/Comparison" className={"link"}>
              <div className="border">
                <img src={border} alt="" />
              </div>
              Comparison
            </NavLink>
          </div>
          <div>
            <NavLink to="/pricing" className={"link"}>
              <div className="border">
                <img src={border} alt="" />
              </div>
              pricing
            </NavLink>
          </div>
        </ul>
      </header>
    </>
  );
}
