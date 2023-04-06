import React, { useState } from "react";
import formbg from "../assets/image/formbg.png";

// import * as React from "react";
import Input, { parsePhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
// import "./styles.css";

import {
  restoimg,
  address,
  bookingmail,
  bookingphone,
  Whatsapp,
  timezone,
  percentege,
  doller,
  opening,
} from "../Utils/Images";

export default function Booking() {
  // flag
  const [onFocuseInput, setOnFocuseInput] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");

  const [name, setName] = useState("");
  const [usererr, setUsererrr] = useState(false);
  const [email, setEmail] = useState("");
  const [emailerr, setEmailerr] = useState();
  // const [num, setNum] = useState("");
  // const [numerr, setNumerr] = useState();
  const [morningtime, setMorningTime] = useState("");
  const [morningtimeerr, setMorningtimeerr] = useState();
  const [nighttime, setNightTime] = useState("");
  const [nighttimeerr, setNighttimeerr] = useState();

  function submitForm(e) {
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(morningtime);
    console.log(nighttime);
    console.log(phoneNumber);
    console.log(country);
  }
  function restroNameHandle(e) {
    const item = e.target.value.replace(/[^a-z]/gi, "");
    setName(item);
    if (item.length < 3) {
      setUsererrr(true);
    } else {
      setUsererrr(false);
    }
  }

  // Mail validation
  function emailHandler(e) {
    setEmail(e.target.value);
    // check if email ends with "@gmail.com"
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    setEmailerr(
      regex.test(e.target.value) && e.target.value.endsWith("@gmail.com")
    );
  }
  // Number input
  // function number(e) {
  //   setNum(e.target.value);

  //   if (num.length === 9 || num.length === 0) {
  //     setNumerr(true);
  //   } else {
  //     setNumerr(false);
  //   }
  // }

  // flag number validaation
  const handleChange = (value) => {
    let p = "",
      c = "";

    const parsedValue = parsePhoneNumber(value ? value : "", "US");
    if (parsedValue) {
      p = parsedValue.nationalNumber;
      c = parsedValue.countryCallingCode;
    }
    setPhoneNumber(p);
    setCountry(c);
  };

  // Morning time validation
  const morningTime = (e) => {
    setMorningTime(e.target.value);
    const regex = /^(1[0-1]|0?[6-9]):[0-5][0-9][ap]m$/; // Regular expression pattern
    setMorningtimeerr(regex.test(e.target.value));
  };

  // Night time validation
  const nightTime = (e) => {
    setNightTime(e.target.value);
    const regex = /^(?:0?[6-9]:[0-5][0-9]pm|10:00pm)$/; // Regular expression pattern
    setNighttimeerr(regex.test(e.target.value));
  };
  return (
    <>
      <img src={formbg} alt="" className="w-100 " />
      <form
        action=""
        onSubmit={submitForm}
        className="booking_form position-absolute bg-white shadow d-flex p-5 "
      >
        <div className="Form_left me-5">
          <div className="first_div mb-4">
            <img src={restoimg} alt="" className="me-2" />
            <label htmlFor="">Restaurant Name / اسم المطعم</label>
            <input
              type="text"
              className="ps-2"
              onChange={restroNameHandle}
              value={name}
              required
            />
          </div>
          <span className="text-danger d-block ms-4 ps-2">
            {usererr === true ? "Your name must be Three letter." : ""}
          </span>
          <div className="second_div ">
            <img src={bookingmail} alt="" className="me-2" />
            <label htmlFor="" className="mt-5">
              Mail Address
            </label>
            <input
              type="email"
              name="mail"
              id="mail"
              onChange={emailHandler}
              required
            />
            <span className="text-danger d-block ms-4 ps-1">
              {emailerr === false ? (
                <p style={{ color: "red" }}>Invalid email address</p>
              ) : (
                ""
              )}
            </span>
            <img src={address} alt="" className="me-2" />
            <label htmlFor="">Address</label>
            <input type="text" />
            <img src={timezone} alt="" className="me-2" />
            <label htmlFor="">Time Zone</label>
            <select name="Timezone" id="timezone" className="d-block">
              <option value="">
                (GMT+02.00) Central European Time - Berlin
              </option>
              <option value="">
                (GMT+02.00) Central European Time - Berlin
              </option>
              <option value="">
                (GMT+02.00) Central European Time - Berlin
              </option>
            </select>
            <div className="third_div">
              <img src={bookingphone} alt="" className="me-2" />
              <label htmlFor="">Phone Number</label>
              {/* add countryCode flag */}
              <div>
                <div className="ms-5 ps-1 ">
                  <Input
                    className={`${
                      onFocuseInput === "phoneNumber"
                        ? "focusedInput w-full"
                        : "registerInput w-full"
                    }`}
                    value="+91"
                    // placeholder="phoneNumber"
                    dir="ltr"
                    defaultCountry="IN"
                    limitMaxLength
                    onChange={handleChange}
                    name="phoneNumber"
                    onFocus={() => setOnFocuseInput("phoneNumber")}
                    required
                  />
                </div>
              </div>

              {/* <span className="text-danger d-block ms-3">
                {numerr === false ? "Your number must be 10 Digit." : ""}
              </span> */}
              <div>
                <div className="ms-5 ps-1 ">
                  <Input
                    className={`${
                      onFocuseInput === "phoneNumber"
                        ? "focusedInput w-full"
                        : "registerInput w-full"
                    }`}
                    value="+91"
                    // placeholder="phoneNumber"
                    dir="ltr"
                    defaultCountry="IN"
                    limitMaxLength
                    onChange={handleChange}
                    name="phoneNumber"
                    onFocus={() => setOnFocuseInput("phoneNumber")}
                    required
                  />
                </div>
              </div>
            </div>
            {/* <span className="text-danger d-block ms-3">
              {numerr === false ? "Your number must be 10 Digit." : ""}
            </span> */}
            <img src={Whatsapp} alt="" className="me-2" />
            <label htmlFor="">Whatsapp Notifications</label>
            <div className="form-check form-switch ">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked"
              />
            </div>
          </div>
        </div>
        <div className="Form_right">
          <div className="first_div">
            <img src={doller} alt="" className="me-2" />
            <label htmlFor="">Currency</label>
            <select className="d-block ms-4 mt-2 ps-2 currency">
              <option value="">QAR</option>
            </select>
          </div>
          <div className="second_div d-flex">
            <div className="second_div_left">
              <img src={percentege} alt="" className="me-2" />
              <label htmlFor="">VAT %</label>
              <input type="number" className="w-75" />
            </div>
            <div className="second_div_right ">
              <label htmlFor="" className="ms-4">
                Service Charge %
              </label>
              <input type="number" className="w-75" />
            </div>
          </div>
          <div className="third_div">
            <img src={opening} alt="" className="me-2" />
            <label htmlFor="">Opening Times</label>
            <div className="d-flex align-items-center">
              <h6>Sunday</h6>
              <input
                type="text"
                name=""
                id=""
                className="opentimeinput d-block"
                placeholder="Open time"
                onChange={morningTime}
                pattern="^(1[0-1]|0?[6-9]):[0-5][0-9][ap]m$" // Regular expression pattern for HTML5 validation
                title="Please enter a valid time between 6:00am and 11:59am"
              />
              <span className="text-danger">
                {morningtimeerr === false ? (
                  <p style={{ color: "red" }}>*</p>
                ) : (
                  ""
                )}
              </span>
              <input
                type="text"
                name=""
                id=""
                className="opentimeinput d-block"
                placeholder="Close time"
                onChange={nightTime}
                pattern="^(?:0?[6-9]:[0-5][0-9]pm|10:00pm)$" // Regular expression pattern for HTML5 validation
                title="Please enter a valid time between 6:00pm and 10:00pm"
              />
              <span className="text-danger">
                {nighttimeerr === false ? (
                  <p style={{ color: "red" }}>*</p>
                ) : (
                  ""
                )}
              </span>
              <input
                type="checkbox"
                name=""
                id=""
                className="w-25 border-0 shadow-none m-0 mt-3 mb-2"
              />
              <p className="mb-1">close</p>
            </div>
            <div className="d-flex align-items-center">
              <h6>Monday</h6>
              <input
                type="text"
                name=""
                id=""
                className="opentimeinput"
                placeholder="Open Time"
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Close Time"
                className="opentimeinput"
              />
              <input
                type="checkbox"
                name=""
                id=""
                className="w-25 border-0 shadow-none m-0 mt-3 mb-2"
              />
              <p className="mb-1">close</p>
            </div>
            <div className="d-flex align-items-center">
              <h6>Tuesday</h6>
              <input
                type="text"
                name=""
                id=""
                className="opentimeinput"
                placeholder="Open Time"
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Close Time"
                className="opentimeinput"
              />
              <input
                type="checkbox"
                name=""
                id=""
                className="w-25 border-0 shadow-none m-0 mt-3 mb-2"
              />
              <p className="mb-1">close</p>
            </div>
            <div className="d-flex align-items-center">
              <h6>Wednesday</h6>
              <input
                type="text"
                name=""
                id=""
                className="opentimeinput"
                placeholder="Open Time"
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Close Time"
                className="opentimeinput"
              />
              <input
                type="checkbox"
                name=""
                id=""
                className="w-25 border-0 shadow-none m-0 mt-3 mb-2"
              />
              <p className="mb-1">close</p>
            </div>
            <div className="d-flex align-items-center">
              <h6>Thursday</h6>
              <input
                type="text"
                name=""
                id=""
                className="opentimeinput"
                placeholder="Open Time"
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Close Time"
                className="opentimeinput"
              />
              <input
                type="checkbox"
                name=""
                id=""
                className="w-25 border-0 shadow-none m-0 mt-3 mb-2"
              />
              <p className="mb-1">close</p>
            </div>
            <div className="d-flex align-items-center">
              <h6>Friday</h6>
              <input
                type="text"
                name=""
                id=""
                className="opentimeinput"
                placeholder="Open Time"
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Close Time"
                className="opentimeinput"
              />
              <input
                type="checkbox"
                name=""
                id=""
                className="w-25 border-0 shadow-none m-0 mt-3 mb-2"
              />
              <p className="mb-1">close</p>
            </div>
            <div className="d-flex align-items-center">
              <h6>Saturday</h6>
              <input
                type="text"
                name=""
                id=""
                className="opentimeinput"
                placeholder="Open Time"
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Close Time"
                className="opentimeinput"
              />
              <input
                type="checkbox"
                name=""
                id=""
                className="w-25 border-0 shadow-none m-0 mt-3 mb-2 bg-black"
              />
              <p className="mb-1">close</p>
            </div>
          </div>
          <button className="btn btn-dark mt-2">UPDATE</button>
        </div>
      </form>
    </>
  );
}

// setTimes([...times, { day: 'New Day', openTime: '', closeTime: '' }]);
//   };
//       <button type="button" onClick={addRow}>Add Row</button>