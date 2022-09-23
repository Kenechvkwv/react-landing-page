import React from "react";
import Header from "./components/header";
import Feature from "./components/feature";
import About from "./components/about";
import aboutImage from "./images/about.png";
import aboutImage2 from "./images/download.png";

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
      <About
        image={aboutImage2}
        title="Download and Get the App now"
        button="Download"
      />
    </div>
  );
}

export default App;
