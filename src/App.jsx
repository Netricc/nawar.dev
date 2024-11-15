import { useEffect, useRef, useState } from "react";
import LandingPage from "./LandingPage/LandingPage";
import Header from "./components/Header/Header";
import Portfolio from "./Portfolio/Portfolio";
import "./app.css"
import Services from "./Services/Services";
// import Scroll from "./components/SmoothScroll"


import "./index.css"


function App() {


  
  
  

  const [buttonVisible, setButtonVisible] = useState(true); // State for button visibility

  // Optionally, you can still keep the scroll handling logic for the button visibility
  const handleScroll = () => {
    if (window.scrollY > 70) {
      setButtonVisible(false); // Hide button if scrolled more than 70 pixels
    } else {
      setButtonVisible(true); // Show button if scrolled back to the top
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); // Clean up the event listener on unmount
    };
  }, []);

  return (
    <main>
      <Header />
      <LandingPage buttonVisible={buttonVisible} />
      <Portfolio />
      <Services></Services>
    </main>
  );
}

export default App;
