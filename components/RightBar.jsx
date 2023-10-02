import React from "react";
import "@styles/rightBar.css";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const RightBar = () => {
  return (
    <div className="right-container">
      <div className="right-labels block md:hidden">
        <div className="right-label">
          <FaGithub />
        </div>
        <div className="right-label">
          <FaLinkedinIn />
        </div>
        <div className="right-label">
          <FaTwitter />
        </div>
      </div>
      <div className="right-labels hidden md:block">
        <div className="right-label">GitHub</div>
        <div className="right-label">LinkedIn</div>
        <div className="right-label">Twitter</div>
      </div>
    </div>
  );
};

export default RightBar;
