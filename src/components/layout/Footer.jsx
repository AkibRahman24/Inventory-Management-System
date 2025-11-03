import React from "react";
import Container from "../Container";
import { Links } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#0C2B4E]">
      <Container>
        <div className="flex justify-around">
          <div className="">
            <p className="text-white">@2025 Urban Threads. All rights reserved.</p>
          </div>
          <div className="flex gap-x-2 justify-end">
            
            <p className="text-white font-light">Terms and Condition</p>
            <p className="text-white font-light">Privacy Policy</p>
            <p className="text-white font-light">Contact</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
