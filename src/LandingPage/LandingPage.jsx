import React, { useRef, useEffect } from "react";
// import VanillaTilt from "vanilla-tilt";
// import hero_image from "../assets/hero-image.png";
import "./landingpage.css";
import { Link } from "react-scroll";

export default function LandingPage({ buttonVisible }) {
  // const imageRef = useRef(null);

  // useEffect(() => {
  //   // Apply Vanilla Tilt to the hero image
  //   VanillaTilt.init(imageRef.current, {
  //     scale: 1.1,
  //     speed: 1000,
  //     max: 15,
  //   });

  //   return () => imageRef.current.vanillaTilt.destroy();
  // }, []);

  const handleClickMouse = () => {
    window.scrollTo({
      top: 828, // Adjust the value as needed
      behavior: "smooth",
    });
  };

  return (
    <section id="hero" className="landing">
      <div className="container">
        <div className="top">
          <div className="content">
            <h1 className="hero-title">I create beautiful <br /> Designs</h1>
            <p className="hero-description">
            Hello! I'm Nawar, a UI/UX Designer and Front-End Developer passionate about creating engaging and visually appealing digital experiences. Take a look at my portfolio—I hope you find exactly what you're looking for!
            </p>
          </div>
          {/* <div className="image">
            <img ref={imageRef} src={hero_image} alt="Hero" />
          </div> */}

        </div>

        <div className="bottom">
          <button
            id="scroll-btn"
            className="scroll-btn"
            style={{ opacity: buttonVisible ? 1 : 0, transition: "opacity 0.3s ease" }}
            onClick={handleClickMouse}
          >
            <Link to="portfolio" spy={true} smooth={true} offset={50} duration={1000}>
              <i className="fa-solid fa-computer-mouse"></i>
              <span>scroll down</span>
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
}
