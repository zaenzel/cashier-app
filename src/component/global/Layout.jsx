import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="relative  bg-neutral-100">
      <Navbar />
      <div className="relative flex justify-center py-5">
        <div className="min-h-screen max-w-6xl w-full">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
