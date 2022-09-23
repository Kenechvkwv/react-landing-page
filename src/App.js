import React from "react";
import Header from "./components/header";
import Feature from "./components/feature";
import About from "./components/about";
import Presentation from "./components/presentation";
import aboutImage from "./images/about.png";
import aboutImage2 from "./images/download.png";
import Contact from "./components/contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Feature />
      <About
        image={aboutImage}
        title="Comes with all you need for Daily Life"
        button="Get the App"
      />
      <Presentation />
      <About
        image={aboutImage2}
        title="Download and Get the App now"
        button="Download"
      />
      <Contact />
    </div>
  );
}

export default App;
