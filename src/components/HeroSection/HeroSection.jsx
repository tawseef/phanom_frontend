import React from "react";
import "./HeroSection.css";
import seo from "../../assets/seo.svg";
import client1 from "../../assets/logo_client1.svg";
import client2 from "../../assets/logo_client2.svg";
import client3 from "../../assets/logo_client3.svg";
import client4 from "../../assets/logo_client4.svg";
import client5 from "../../assets/logo_client5.svg";

function HeroSection() {
  return (
    <div className="heroDiv">
      <div className="bannerDiv">
        <div className="hero">
          <div className="heroText">
            <span className="textColor"> Let’s innovation </span> meets your
            excellence
          </div>
          <div className="heroContent">
            Excellence refined, innovation ignited, the future starts here
          </div>
          <div>
            <button className="">Book an Appointment</button>
          </div>
        </div>
        <div>
          <img src={seo} alt="Not Found" />
        </div>
      </div>
      <div className="logoSection">
        <img src={client1} alt="Not Found" className="client" />
        <img src={client2} alt="Not Found" className="client" />
        <img src={client3} alt="Not Found" className="client" />
        <img src={client4} alt="Not Found" className="client" />
        <img src={client5} alt="Not Found" className="client" />
      </div>
    </div>
  );
}

export default HeroSection;
