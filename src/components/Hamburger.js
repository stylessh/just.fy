import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import paris from "../images/paris.jpg";
import losangeles from "../images/losangeles.jpg";
import london from "../images/london.jpg";
import sanfrancisco from "../images/sanfrancisco.jpg";
import dubai from "../images/dubai.jpg";

import {
  closeMenu,
  staggerText,
  staggerReveal,
  handleCity,
  handleCityReturn,
  fadeInUp,
  openMenu,
} from "../animations/index";

const cities = [
  { name: "Paris", image: paris },
  { name: "Los Angeles", image: losangeles },
  { name: "London", image: london },
  { name: "San Francisco", image: sanfrancisco },
  { name: "Dubai", image: dubai },
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

      closeMenu(revealMenu, revealMenuBackground, menu);
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      // open menu

      openMenu(menu, revealMenuBackground, revealMenu);

      staggerReveal(revealMenuBackground, revealMenu);

      fadeInUp(info);
      staggerText(line1, line2, line3);
    }
  }, [state]);

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

        <div className="menu-container">
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
                  onMouseEnter={() => handleCity(city.image, cityBackground)}
                  onMouseOut={() => handleCityReturn(cityBackground)}
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
