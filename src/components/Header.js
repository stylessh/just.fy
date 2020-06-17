import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import Hamburguer from "./Hamburger";

import "../styles/header.scss";

const Header = ({ history }) => {
  // state for menu button
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu.",
  });

  //   State for disabled button
  const [disable, setDisable] = useState(false);

  // use effect por page changes
  useEffect(() => {
    history.listen(() => {
      setState({
        clicked: false,
        menuName: "Menu.",
      });
    });
  });

  const handleMenu = () => {
    disableMenuButton();

    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close.",
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu.",
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close.",
      });
    }
  };

  //   determine if our menu button should be disabled
  const disableMenuButton = () => {
    setDisable(!disable);

    setTimeout(() => {
      setDisable(false);
    }, 1200);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">JUST.FY</Link>
        </div>

        <div className="menu">
          <button disabled={disable} onClick={handleMenu}>
            Menu.
          </button>
        </div>
      </div>

      <Hamburguer state={state} />
    </header>
  );
};

export default withRouter(Header);
