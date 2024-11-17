import React from "react";
import { AiFillFacebook, AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="py-5 mt-3 bg-purple-50 flex flex-col md:flex-row justify-around items-center gap-4 md:gap-10 absolute right-0 left-0">
      <div className="text-center md:text-left">
        <h2 className="text-lg font-semibold">Contact Us</h2>
        <p>Phone: 7658864572</p>
        <p>Email: support@furniturehouse.com</p>
        <p>Address: Indora,	
        176402 ,HP</p>
      </div>
      <div className="text-center md:text-left">
        <h2 className="text-lg font-semibold">Follow Us</h2>
        <div className="flex gap-3 justify-center md:justify-start">
          <AiFillFacebook className="text-2xl cursor-pointer hover:text-blue-600 transition" />
          <AiFillTwitterCircle className="text-2xl cursor-pointer hover:text-blue-400 transition" />
          <AiFillInstagram className="text-2xl cursor-pointer hover:text-pink-500 transition" />
        </div>
      </div>
      <div className="text-center md:text-left">
        <h2 className="text-lg font-semibold">At Your Service</h2>
        <p>We are here to help you with all your furniture needs.</p>
      </div>
    </div>
  );
};

export default Footer;