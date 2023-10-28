import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { AiOutlineYoutube } from "react-icons/ai";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer section">
      <div className="footer_container container grid">
        <div className="footer_content grid">
          <div className="footer_data">
            <h3 className="footer_title">IndoXplore</h3>
            <p className="footer_description">
              You choose the <br /> destination, we offer you the <br />
              information.
            </p>
            <div>
              <a href="https://www.facebook.com/" className="footer_social">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com/" className="footer_social">
                <BsTwitter />
              </a>
              <a href="https://www.instagram.com/" className="footer_social">
                <BsInstagram />
              </a>
              <a href="https://www.youtube.com/" className="footer_social">
                <AiOutlineYoutube />
              </a>
            </div>
          </div>

          <div className="footer_data">
            <h3 className="footer_subtitle">About</h3>
            <ul>
              <li className="footer_item">
                <Link to={"/about"} className="footer_link">
                  About Us
                </Link>
              </li>
              <li className="footer_item">
                <Link to={"/about"} className="footer_link">
                  Vision & Mission
                </Link>
              </li>
              <li className="footer_item">
                <Link to={"/about"} className="footer_link">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer_data">
            <h3 className="footer_subtitle">Explore</h3>
            <ul>
              <li className="footer_item">
                <Link to={"/explore"} className="footer_link">
                  Destination
                </Link>
              </li>
              <li className="footer_item">
                <Link to={"/explore"} className="footer_link">
                  Go Explore
                </Link>
              </li>
              <li className="footer_item">
                <Link to={"/articles"} className="footer_link">
                  Articles
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer_data">
            <h3 className="footer_subtitle">Contacts</h3>
            <ul>
              <li className="footer_item">
                <span className="footer_link">Fasilkom-Ti USU</span>
              </li>
              <li className="footer_item">
                <span className="footer_link">IndoXplore@gmail.com</span>
              </li>
              <li className="footer_item">
                <span className="footer_link">+62 867837283</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer_rights">
          <div className="line"></div>
          <p className="footer_copy">
            &#169; 2023 IndoXplore. All rigths reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
