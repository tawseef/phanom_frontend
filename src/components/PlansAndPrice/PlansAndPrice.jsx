import React from "react";
import "./PlansAndPrice.css";
import adarsh from "../../assets/adarsh.svg";
import planandprice from "../../assets/planandprice.svg";
import unique from "../../assets/unique_frame.svg";
import solution from "../../assets/solution_frame.svg";
import options from "../../assets/options_frame.svg";

function PlansAndPrice() {
  return (
    <div className="">
      <div className="priceDiv">
        <div className="nameDiv">
          <div>
            <div className="name">Adarsh</div>
            <div className="title">Phanom Guide</div>
          </div>
          <div>
            <img src={adarsh} alt="Not Found" className="adarshImg" />
          </div>
        </div>

        <div className="planImgDiv">
          <img src={planandprice} alt="Not Found" className="planImg" />
        </div>
      </div>
      <div className="optionDiv">
        <img src={options} alt="Not Found" />
      </div>
      <div className="uniqueDiv">
        <div>
          <img src={unique} alt="Not Found" />
        </div>
        <div>
          <img src={solution} alt="Not Found" />
        </div>
      </div>
    </div>
  );
}

export default PlansAndPrice;
