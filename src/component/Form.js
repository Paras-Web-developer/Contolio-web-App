import React from "react";
import {Union,emailgif,usergif,phonegif,loadinggif,
} from "../Utils/Images";
import bg from "../assets/image/unsplash_hCU4fimRW-c.png";
import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [usererr, setUsererr] = useState(false);
  const [email, setEmail] = useState("");
  const [emailerr, setEmailerr] = useState();
  const [cmd, setCmd] = useState("");
  const [num, setNum] = useState("");
  const [numerr, setNumerr] = useState();
  const textReset = React.useRef();
  const emailReset = React.useRef();
  const numberReset = React.useRef();
  const commentReset = React.useRef();
  const handleSubmit = (event) => {
    alert("Do you wanna submit form");

    event.preventDefault(); // 👈️ prevent page refresh
    textReset.current.value = "";
    emailReset.current.value = "";
    numberReset.current.value = "";
    commentReset.current.value = "";
    // access input values here

    document.getElementById("load").style.display = "inline";
    document.getElementById("btn").style.display = "inline";
    document.getElementById("btn").style.display = "none";
    // setTimeout
    setTimeout(() => {
      document.getElementById("load").style.display = "none";
      document.getElementById("btn").style.display = "inline";
      console.log("Name =>", name);
      console.log("Email =>", email);
      console.log("Number =>", num);
      console.log("Message =>", cmd);
    }, 5000);
    setTimeout(() => {
      alert("Request sended Successfuly");
    }, 5200);

    // clear all input values in the form
    setName("");
    setEmail("");
    setNum("");
    setCmd("");
  };

  // username Validation
  function userHandler(e) {
    // setName(e.target.value);
    // const regex = /^[A-Za-z]+$/;
    // setUsererr(
    //   regex.test(e.target.value)
    // );

    let item = e.target.value.replace(/[^a-z]/gi, "");
    setName(item);
    if (item.length < 3) {
      setUsererr(true);
    } else {
      setUsererr(false);
    }
  }

  //  Email validation
  function emailHandler(e) {
    setEmail(e.target.value);
    // check if email ends with "@gmail.com"
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    setEmailerr(
      regex.test(e.target.value) && e.target.value.endsWith("@gmail.com")
    );
  }

  // Text area message

  function comment(e) {
    setCmd(e.target.value);
  }

  // Number input
  function number(e) {
    setNum(e.target.value);

    if (num.length === 9 || num.length === 0) {
      setNumerr(true);
    } else {
      setNumerr(false);
    }
  }

  return (
    <>
      <header className="form">
        <img src={bg} alt="" className="w-100" />
      </header>
      <div className="container w-50 bg-white text-center mt-5 pt-3">
        <img src={Union} alt="" className="w-25 d-block m-auto" />
        <form action="" className="ps-5 pe-5" onSubmit={handleSubmit}>
          <div>
            <div className="icon">
              <img src={usergif} alt="" />
            </div>
            <input
              type="text"
              name="name"
              id="name"
              className=" mt-3 d-inline p-2 ps-5 shadow border-0 rounded nmem "
              placeholder="Full Name"
              style={{ outline: "none" }}
              onChange={userHandler}
              required
              ref={textReset}
            />
            <span className="text-danger d-block">
              {usererr === true
                ? "Your name must be Three letter without number included."
                : ""}
            </span>
            <div className="icon">
              <img src={emailgif} alt="" />
            </div>
            <input
              type="email"
              name="email"
              id="email"
              className=" mt-3 d-inline p-2 ps-5 shadow border-0 rounded nmem"
              placeholder="Enter Email"
              style={{ outline: "none" }}
              onChange={emailHandler}
              required
              ref={emailReset}
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
              className="pt-2 pb-2 ms-3 shadow rounded"
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
            <div className="icon">
              <img src={phonegif} alt="" />
            </div>
            <input
              type="number"
              onwheel="this.blur()"
              name=""
              id="number"
              className="number mt-3 d-inline mb-3 p-2 ps-5 shadow border-0 rounded"
              placeholder="Number"
              style={{ outline: "none" }}
              onChange={number}
              required
              ref={numberReset}
            />
            <span className="text-danger d-block">
              {numerr === false ? "Your number must be 10 Digit." : ""}
            </span>

            <textarea
              id="comment"
              name="w3review"
              rows="4"
              cols="50"
              className="shadow ms-3 p-2 border-0 rounded"
              placeholder="Type something here..."
              style={{ outline: "none" }}
              onChange={comment}
              required
              ref={commentReset}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary m-4 p-3 ps-5 pe-5 loading-btn"
          >
            <img src={loadinggif} alt="" id="load" />
            <h6 id="btn">Book a Demo</h6>
          </button>
        </form>
      </div>
    </>
  );
}
