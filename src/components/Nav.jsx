import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div>
      <Link to='/'>
        <img className="mx-auto w-[150px] my-6" src={logo} alt="" />
      </Link>
    </div>
  );
};

export default Nav;
