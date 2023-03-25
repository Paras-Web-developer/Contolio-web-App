import React from "react";
import { Union } from "../Utils/Images";
import bg from "../assets/image/unsplash_hCU4fimRW-c.png";
import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [usererr, setUsererr] = useState(false);
  const [email, setEmail] = useState("");
  const [emailerr, setEmailerr] = useState();

  const handleSubmit = (event) => {
    event.preventDefault(); // 👈️ prevent page refresh

    // 👇️ access input values here
    console.log("Name 👉️", name);
    console.log("Email 👉️", email);
    // console.log("select 👉️", select);

    // 👇️ clear all input values in the form
    setName("");
    setEmail("");
  };

  // username Validation
  function userHandler(e) {
    let item = e.target.value;
    if (item.length < 3) {
      setUsererr(true);
    } else {
      setUsererr(false);
    }
  }

  // email validation
  function emailHandler(e) {
    setEmail(e.target.value);
    // check if email ends with "@gmail.com"
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    setEmailerr(
      regex.test(e.target.value) && e.target.value.endsWith("@gmail.com")
    );
  }

  return (
    <>
      <header className="form">
        <img src={bg} alt="" className="w-100" />
      </header>
      <div className="container w-50 bg-white text-center mt-5 pt-3 mb-5">
        <img src={Union} alt="" className="w-25 d-block m-auto" />
        <form action="" className="ps-5 pe-5" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            id="name"
            className="w-100 mt-3 d-block p-2 shadow border-0 rounded"
            placeholder="Full Name"
            style={{ outline: "none" }}
            onChange={userHandler}
          />
          <span className="text-danger d-block">
            {usererr === true ? "Your name must be Three letter." : ""}
          </span>
          <input
            type="email"
            name="email"
            id="email"
            className="w-100 mt-3 d-inline p-2 shadow border-0 rounded"
            placeholder="Enter Email"
            style={{ outline: "none" }}
            onChange={emailHandler}
          />
          <span className="text-danger d-block">
            {emailerr === false ? (
              <p style={{ color: "red" }}>Invalid email address</p>
            ) : (
              ""
            )}
          </span>
          <select
            style={{ outline: "none", border: "none" }}
            className="pt-2 pb-2 me-4 shadow rounded"
            id="select"
          >
            <option value="" className="option">
              IND 91+
            </option>
            <option value="" className="option">
              USA 02+
            </option>
            <option value="" className="option">
              CDA 01+
            </option>
          </select>
          <input
            type="number"
            name=""
            id="number"
            className="w-75 mt-3 d-inline mb-3 p-2 shadow border-0 rounded"
            placeholder="Number"
            style={{ outline: "none" }}
          />
          <textarea
            id="comment"
            name="w3review"
            rows="4"
            cols="67"
            className="shadow border-0 rounded"
            placeholder="Type something here..."
            style={{ outline: "none" }}
          />
          <button
            type="submit"
            id="btn"
            className="btn btn-primary m-4 p-3 ps-5 pe-5"
          >
            Book a Demo
          </button>
        </form>
      </div>
    </>
  );
}
