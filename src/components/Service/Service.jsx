import React from "react";
import "./Service.css";
import circle from "../../assets/cricle_frame.svg";
import choose from "../../assets/choose_text.svg";
import chooseText from "../../assets/choose_component_text.svg";
import mission from "../../assets/mission_frame.svg";
import missionMobile from "../../assets/mission_mobile.svg";

function Service() {
  return (
    <div>
      <div className="serviceDiv">
        <div className="chooseDiv">
          <div>
            <img src={circle} alt="Not Found" />
          </div>
          <div>
            <img src={choose} alt="Not Found" />
          </div>
          <div className="chooseTextDiv">
            <img src={chooseText} alt="Not Found" className="chooseTextImg" />
          </div>
        </div>
        <img src={mission} className="missionDesktop" alt="Not Found" />
        <img src={missionMobile} className="missionMobile" alt="Not Found" />
      </div>

      <div className="inputDiv">
        <div className="text"> Build skill, connect.</div>
        <div>
          <form>
            <input
              type="email"
              className="inputBox"
              required
              placeholder="Enter your Email"
            />
            <button type="submit" className="submitBtn">
              {" "}
              Send{" "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Service;
