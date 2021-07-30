import React, { useState } from "react";
import "./NavbarStyle.css";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [btnCheck, setBtnCheck] = useState(false);

  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="title">
          <a href="#home">
            <h1>Hiromi Jorge</h1>
          </a>
        </div>
        <div className="navList">
          <ul className={btnCheck ? "links" : ""}>
            <li>
              <Link to="/">
                <a onClick={() => setBtnCheck(!btnCheck)}>Home</a>
              </Link>
            </li>
            <li>
              <a href="#projects" onClick={() => setBtnCheck(!btnCheck)}>
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" onClick={() => setBtnCheck(!btnCheck)}>
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setBtnCheck(!btnCheck)}>
                Contact
              </a>
            </li>
          </ul>
          <MenuIcon
            className="icon"
            color="black"
            onClick={() => setBtnCheck(!btnCheck)}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
