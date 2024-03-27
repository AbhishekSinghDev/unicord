import React from "react";
import Navbar from "../components/Navbar";
import Component from "../components/Dashboard_Home";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="p-4">
        <Component />
      </div>
    </>
  );
};

export default page;
