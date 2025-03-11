import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import downarrow from "../../assets/down-arrow.png";
import menuIcon from "../../assets/menu.png";
import closeIcon from "../../assets/close.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="NavContainer">
      <div className="logoDiv">
        <img src={logo} alt="Logo" />
      </div>

      <div className="menuDiv">
        <div className="menuItem">
          Service <img src={downarrow} alt="Arrow" className="downarrow" />
        </div>
        <div className="menuItem">
          Hire Indian Talent{" "}
          <img src={downarrow} alt="Arrow" className="downarrow" />
        </div>
        <div> Our Portfolio </div>
        <div> Case Study </div>
        <div>
          <button> Book an Appointment </button>
        </div>
      </div>

      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <img src={isOpen ? closeIcon : menuIcon} alt="Menu" />
      </div>

      <div className={`mobileMenu ${isOpen ? "open" : ""}`}>
        <div className="menuItem">
          Service <img src={downarrow} alt="Arrow" className="downarrow" />
        </div>
        <div className="menuItem">
          Hire Indian Talent{" "}
          <img src={downarrow} alt="Arrow" className="downarrow" />
        </div>
        <div> Our Portfolio </div>
        <div> Case Study </div>
        <div>
          <button> Book an Appointment </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
