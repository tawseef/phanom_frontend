import React from "react";
import "./BlogSection.css";
import face1 from "../../assets/face1.svg";
import face2 from "../../assets/face2.svg";
import face3 from "../../assets/face3.svg";
import face4 from "../../assets/face4.svg";
import post1 from "../../assets/Post1.svg";
import post2 from "../../assets/Post2.svg";
import post3 from "../../assets/Post3.svg";

function BlogSection() {
  return (
    <div>
      <div style={{ height: "662px" }}>

        <div className="faceDiv">
          <div className="faceText">
            Real Stories, Real Impact: Our User's Shares Their Experience
          </div>
          <div className="faces">
            <img src={face1} alt="Not Found" />
            <img src={face2} alt="Not Found" />
            <img src={face4} alt="Not Found" />
            <img src={face3} alt="Not Found" />
          </div>
        </div>
      </div>
      <div className="blogDiv">
        <div className="blogTitle">
          {/* &nbsp; */}
          Our <span className="textColor">Blog</span> and
          <span className="textColor"> Articles</span>
        </div>
        <div className="blogText">
          Take a look at our Company’s Blog Series or read some professional
          gardening insights and news.
        </div>
        <div className="postsDiv">
          <div>
            <img src={post1} alt="Post 1" />
          </div>
          <div>
            <img src={post2} alt="Post 2" />
          </div>
          <div>
            <img src={post3} alt="Post 3" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogSection;
