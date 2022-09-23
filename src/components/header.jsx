import React from "react";
import Navbar from "./navbar";

function Header() {
  return (
    <div id="main">
      <Navbar />
      <div className="name">
        <h1>
          <span>Launch Your App</span> With Confidence And Creativity
        </h1>
        <p className="details">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad
          voluptatem unde laborum beatae consectetur. Suscipit, ex dolorum quasi
          corrupti iusto sint error ab? Reprehenderit quam ipsam quod? Atque,
          quae illo?
        </p>
        <a href="" className="cv-btn">
          Download
        </a>
      </div>
    </div>
  );
}

export default Header;
