import React from "react";
import "../FooterSection/Footer.css";
import Github from "../../images/icons/github.svg";
import Linkedin from "../../images/icons/linkedinround.svg";

const Footer = () => {
  return (
    <section className="footerSection">
      <div className="footerContainer">
        <div className="socials">
          <a href="https://github.com/IsakLarsson">
            <div className="socialLink">
              <img src={Github} />
            </div>
          </a>

          <a href="https://www.linkedin.com/in/isak-%C3%A5man-larsson-629330181/">
            <div className="socialLink">
              <img src={Linkedin} />
            </div>
          </a>
        </div>
        <div className="copyright">
          <p>Isak Åman Larsson ©2020</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
