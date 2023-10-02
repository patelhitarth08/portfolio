"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import "@styles/nav.css";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (isOpen && event.target.closest(".nav-dropdown") === null) {
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
    <section id="nav">
      <div className="nav">
        <div className="pl-7">
          <a href="#top">
            <Image
              src="/assets/images/duhacks.png"
              alt="DU Hacks"
              width={75}
              height={75}
            />
          </a>
        </div>
        <div>
          <div className="relative">
            <button
              className="dropdown-toggle text-3xl cursor-pointer"
              onClick={toggleDropdown}
            >
              &#9776;
            </button>
            {isOpen && (
              <div className="dropdown-menu nav-dropdown">
                <a href="#home" className="nav-dropdown-titles">
                  Home
                </a>
                <a href="#education" className="nav-dropdown-titles">
                  Education
                </a>
                <a href="#skills" className="nav-dropdown-titles">
                  Skills
                </a>
                <a href="#projects" className="nav-dropdown-titles">
                  Projects
                </a>
                <a href="#experience" className="nav-dropdown-titles">
                  Experience
                </a>
                <a href="#extra" className="nav-dropdown-titles">
                  Extra Curricular
                </a>
                <a href="#achievements" className="nav-dropdown-titles">
                  Achievements & Profiles
                </a>
                <a href="#contactMe" className="nav-dropdown-titles">
                  Contact Me
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nav;
