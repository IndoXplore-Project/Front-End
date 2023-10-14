import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { AiOutlineYoutube } from "react-icons/ai";

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
                <a href="" className="footer_link">
                  About Us
                </a>
              </li>
              <li className="footer_item">
                <a href="" className="footer_link">
                  Vision & Mission
                </a>
              </li>
              <li className="footer_item">
                <a href="" className="footer_link">
                  Services
                </a>
              </li>
            </ul>
          </div>

          <div className="footer_data">
            <h3 className="footer_subtitle">Explore</h3>
            <ul>
              <li className="footer_item">
                <a href="" className="footer_link">
                  Destination
                </a>
              </li>
              <li className="footer_item">
                <a href="" className="footer_link">
                  Go Explore
                </a>
              </li>
              <li className="footer_item">
                <a href="" className="footer_link">
                  Articles
                </a>
              </li>
            </ul>
          </div>

          <div className="footer_data">
            <h3 className="footer_subtitle">Contacts</h3>
            <ul>
              <li className="footer_item">
                <span className="footer_link">
                  Fasilkom-Ti Universitas Sumatera Utara
                </span>
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
          <p className="footer_copy">
            &#169; 2023 IndoXplore. All rigths reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
