import React from "react";

function About(props) {
  return (
    <id id="about">
      <div className="about-image">
        <img src={""} alt="" />
      </div>
      <div className="about-text">
        <h2>{props.title}</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
          officiis cum molestias consequuntur dolorem? Autem neque, distinctio
          illum asperiores officiis repellat quaerat ullam nulla, nam dolore
          sapiente reiciendis sequi deleniti!
        </p>
        <button>{props.button}</button>
      </div>
    </id>
  );
}

export default About;
