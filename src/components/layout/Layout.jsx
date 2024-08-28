import React from "react";
import Footer from "../footer/Footer";
import NavBar from "../navbar/NavBar";

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
