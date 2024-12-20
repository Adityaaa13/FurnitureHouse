import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <div className="font-monoton text-3xl  hover:text-purple-800 cursor-pointer text-center transition">
        furniture  &nbsp;&nbsp;  house
      </div>
    </Link>
  );
};

export default Logo;
