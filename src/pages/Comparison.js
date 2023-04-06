import React from "react";
import ComparisionDiv from "../component/comparisionDiv";
import Navbar from "../component/Navbar";

export default function Comparison() {
  const comcard1 = {
    head1: "Service",
    content:
      "Buildings, Units, Payments, Maintenance, Expences, and Contracts dashboard and reporting",
    head2: "Without Contolio",
    content1:
      "Multiple employees and departments included in the preparation process of dashboards and reporting.",
    content2:
      "Due to manual preparation of reports and dashboards, critical management queries might not get answered quickly.",
    content3:
      "Expected risk of inaccurate reported figures due to human errors which may lead into financial loses due to wrong discissions.",
    head3: "With Contolio",
    content4:
      "Management is just one click away from pulling out overall portfolio view and detailed reporting.",
  };
  const comcard2 = {
    head1: "Service",
    content: "Building Management",
    head2: "Without Contolio",
    content1:
      "List of buildings, units and tenants is being maintained on excel (80% of property managers)",
    content2:
      "Expected riskod data loss as maintained list is being managed locally and deletions may occur with no real mechanism of tracking such an action.",
    content3:
      "Man-risk is also expected as an employee can delete or change the list of building with no controls in place as rules management is missing.",
    content4:
      "No easy way to pull out the details of a building, unit or tenant as data is not structured.",
    head3: "With Contolio",
    content5:
      "Management is just one click away from pulling out overall portfolio view and detailed reporting.",
  };
  return (
    <>
    <Navbar />
    <div className="Comparison">
      <div className="paras">
        <ComparisionDiv props={comcard1} />
        <ComparisionDiv props={comcard2} />
      </div>
    </div>
    </>
  );
}
