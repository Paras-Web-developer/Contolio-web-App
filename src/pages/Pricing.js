import React from "react";
import unionBlue from "../assets/image/UnionBlue.png";
import tik from "../assets/image/tik.png";

export default function Pricing() {
  return (
    <>
      <div className="pricing w-100 text-center text-white">
        <h2>Pricing</h2>
        <h5>Designed for all property managers sizes</h5>
      </div>
      <section className="pricing d-flex justify-content-center align-items-center bg-white w-50 m-auto">
        <div className="pricing-l">
          <img src={unionBlue} alt="" className="w-75" />
        </div>
        <div className="pricing-r ps-3">
          <div className="pricing-r-top text-center">
            <h5>QAR 5</h5>
            <h6 className="text-muted">per unit / per month</h6>
            <h5>
              Minimum monthly fee <span className="text-primary">QAR 1000</span>
            </h5>
          </div>
          <div className="pricing-r-mid">
            <div>
              <img src={tik} alt="" />
              <h6>Robust Accounting and Reporting</h6>
            </div>
            <div>
              <img src={tik} alt="" />
              <h6>Built-in Virtual Marketing and Leasing Tools</h6>
            </div>
            <div>
              <img src={tik} alt="" />
              <h6>Resident and Owner Management</h6>
            </div>
            <div>
              <img src={tik} alt="" />
              <h6>Online Maintenance</h6>
            </div>
            <div>
              <img src={tik} alt="" />
              <h6>Continuous Software Updates</h6>
            </div>
            <button className="btn btn-primary mt-3 w-50 mb-2">
              Book a Demo
            </button>
          </div>
          <div className="pricing-r-bottom ">
            <h6>Onboardng fee based on Portfolio size.</h6>
          </div>
        </div>
      </section>
    </>
  );
}
