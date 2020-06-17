import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

import dallas from "../images/dallas.jpg";
import austin from "../images/austin.jpg";
import newyork from "../images/newyork.jpg";
import sanfrancisco from "../images/sanfrancisco.jpg";
import beijing from "../images/beijing.jpg";

const cities = [
  { name: "Dallas", image: dallas },
  { name: "Austin", image: austin },
  { name: "New York", image: newyork },
  { name: "San Francisco", image: sanfrancisco },
  { name: "Beijing", image: beijing },
];

const Hamburger = ({ state }) => {
  // Vars for dom elements
  let menu = useRef(null);
  let revealMenu = useRef(null);
  let revealMenuBackground = useRef(null);
  let cityBackground = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let info = useRef(null);

  useEffect(() => {
    if (state.clicked === false) {
      // close menu

      gsap.to([revealMenu, revealMenuBackground], {
        duration: 0.8,
        height: 0,
        transformOrigin: "right",
        skewY: 2,
        ease: "power3.inOut",
        stagger: {
          amount: 0.1,
        },
      });

      gsap.to(menu, {
        duration: 1,
        css: { display: "none" },
      });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      // open menu

      gsap.to(menu, {
        duration: 0,
        css: { display: "block" },
      });

      gsap.to([revealMenuBackground, revealMenu], {
        duration: 0,
        opacity: 1,
        skewY: 0,
        height: "100%",
      });

      staggerReveal(revealMenuBackground, revealMenu);

      fadeInUp(info);
      staggerText(line1, line2, line3);
    }
  }, [state]);

  const staggerReveal = (node1, node2) => {
    gsap.from([node1, node2], {
      duration: 0.8,
      height: 0,
      transformOrigin: "right",
      skewY: 2,
      ease: "power2.inOut",
      stagger: {
        amount: 0.1,
      },
    });
  };

  const fadeInUp = (node) => {
    gsap.from(node, {
      y: 60,
      duration: 0.5,
      delay: 0.5,
      opacity: 0,
      ease: "powe3.inOut",
    });
  };

  const staggerText = (node1, node2, node3) => {
    gsap.from([node1, node2, node3], {
      duration: 0.8,
      opacity: 0,
      delay: 0.6,
      ease: "power3.inOut",
      stagger: {
        amount: 0.3,
      },
    });
  };

  const handleCity = (city) => {
    gsap.to(cityBackground, {
      duration: 0,
      background: `url(${city}) center center`,
      backgroundSize: 'cover'
    });
    gsap.to(cityBackground, {
      duration: 0.4,
      opacity: 1,
      ease: "power3.inOut",
    });
    gsap.from(cityBackground, {
      duration: 0.4,
      skewY: 2,
      transformOrigin: "right top",
    });
  };

  const handleCityReturn = () => {
    gsap.to(cityBackground, {
      duration: 0.4,
      opacity: 0,
    });
  };

  return (
    <div className="hamburguer-menu" ref={(el) => (menu = el)}>
      <div
        className="menu-second-background"
        ref={(el) => (revealMenuBackground = el)}
      ></div>
      <div className="menu-layer" ref={(el) => (revealMenu = el)}>
        <div
          className="menu-city-background"
          ref={(el) => (cityBackground = el)}
        ></div>

        <div className="container">
          <div className="menu-links">
            <nav>
              <ul>
                <li>
                  <Link ref={(el) => (line1 = el)} to="/opportunities">
                    Opportunities
                  </Link>
                </li>
                <li>
                  <Link ref={(el) => (line2 = el)} to="/solutions">
                    Solutions
                  </Link>
                </li>
                <li>
                  <Link ref={(el) => (line3 = el)} to="/contact-us">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="info" ref={(el) => (info = el)}>
              <h3>Our Promise</h3>

              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </p>
            </div>

            <div className="locations">
              Locations:
              {cities.map((city) => (
                <span
                  key={city.name}
                  onMouseEnter={() => handleCity(city.image)}
                  onMouseOut={handleCityReturn}
                >
                  {city.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
