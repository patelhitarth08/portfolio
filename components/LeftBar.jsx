"use client";
import React, { useEffect, useState } from "react";
import "../styles/leftbar.css";

const LeftBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    function handleClickOutside(event) {
      if (isOpen && event.target.closest(".responsive-left") === null) {
        setIsOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="left-container h-full">
      <div className="block md:hidden">
        {!isOpen && (
          <button
            className="dropdown-toggle text-3xl m-5 md:hidden cursor-pointer"
            onClick={toggleDropdown}
          >
            &#9776;
          </button>
        )}

        {isOpen && (
          <>
            <button
              className="dropdown-toggle text-3xl m-5 md:hidden cursor-pointer"
              onClick={toggleDropdown}
            >
              &#10007;
            </button>
            <div className="left-labels responsive-left">
              <div className="left-label">
                <a href="#home">Home</a>
              </div>
              <div className="left-label">
                <a href="#education">Education</a>
              </div>
              <div className="left-label">
                <a href="#skills"> Skills</a>
              </div>
              <div className="left-label">
                <a href="#projects">Projects</a>
              </div>
              <div className="left-label">
                <a href="#experience">Experience</a>
              </div>
              <div className="left-label">
                <a href="#extra">Extra Curricular</a>
              </div>
              <div className="left-label">
                <a href="#achievements">Achievements & Profiles</a>
              </div>
              <div className="left-label">
                <a href="#contactMe">Contact Me</a>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="left-labels hidden md:block">
        <div className="left-label">
          <a href="#home">Home</a>
        </div>
        <div className="left-label">
          <a href="#education">Education</a>
        </div>
        <div className="left-label">
          <a href="#skills"> Skills</a>
        </div>
        <div className="left-label">
          <a href="#projects">Projects</a>
        </div>
        <div className="left-label">
          <a href="#experience">Experience</a>
        </div>
        <div className="left-label">
          <a href="#extra">Extra Curricular</a>
        </div>
        <div className="left-label">
          <a href="#achievements">Achievements & Profiles</a>
        </div>
        <div className="left-label">
          <a href="#contactMe">Contact Me</a>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
