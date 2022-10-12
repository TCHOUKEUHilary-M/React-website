import React from "react";
import Topbar from "./Topbar";
import Navbar from "./Navbar";

const Header = (props) => {
  return (
    <div>
      <Topbar />
      <Navbar cartCount={props.cartCount} />
    </div>
  );
};

export default Header;
