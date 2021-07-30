import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <footer>
        <a href="https://www.instagram.com/hiromijorge/?hl=en">
          <InstagramIcon
            className="footer-icon"
            color="#8A168C"
            fontSize="medium"
          />
        </a>
        <p>Copyright 2021 - Hiromi Jorge</p>
        <a href="https://id.linkedin.com/in/hiromijorge">
          <LinkedInIcon
            className="footer-icon icon-2"
            color="#399BF5"
            fontSize="medium"
          />
        </a>
      </footer>
    </div>
  );
}

export default Footer;
