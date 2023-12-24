import React from "react";
import MainHeader from "../MainHeader";

const Layaut = ({ children }) => {
  return (
    <>
      <MainHeader />
      <main>{children}</main>
    </>
  );
};

export default Layaut;
