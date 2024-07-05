import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title">Sandali Kulasooriya</h1>

        <ul className="footer_list">
          <li>
            <a href="#home" className="footer_link">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="footer_link">
              {" "}
              About{" "}
            </a>
          </li>

          <li>
            <a href="#projects" className="footer_link">
              {" "}
              Projects
            </a>
          </li>
        </ul>

        <div className="footer_social">
          <a
            href="#"
            className="footer_social-link"
            target="_blank"
          >
            <i className="bx bxl-facebook"></i>
          </a>

          <a href="#" className="footer_social-link" target="_blank">
            <i className="bx bxl-twitter"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/sandali-kulasooriya-92847b210/"
            className="footer_social-link"
            target="_blank"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>

        <span className="footer_copy">
          &#169; Sandali Kulasooriya. All rights reserved
        </span>
      </div>
    </footer>
  );
}

export default Footer;
