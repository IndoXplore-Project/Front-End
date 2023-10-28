import React from "react";
import "./hero.css";
import heroImg from "./../../assets/img/hero-bg.jpg";
import heroInfoImg from "./../../assets/img/hero-info-img.jpg";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { ButtonPrimary, ButtonLinkArrow } from "../button/Button";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero" id="hero">
      <img src={heroImg} alt="" className="hero_img" />

      <div className="hero_container container grid">
        <div className="hero_data">
          <span className="hero_data-subtitle">Discover your place</span>
          <h1 className="hero_data-title">
            Explore Indonesia's Iconic Destinations
          </h1>
          <p className="hero_data-desc">
            From Bali's golden beaches to Yogyakarta's ancient temples, embark
            on a journey through Indonesia's most enchanting locales.{" "}
          </p>
          <Link to={`/explore`}>
            <ButtonPrimary text={"Explore"} />
          </Link>
        </div>

        <div className="hero_social">
          <a href="https://www.facebook.com/" className="hero_social-link">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/" className="hero_social-link">
            <BsInstagram />
          </a>
          <a href="https://twitter.com/" className="hero_social-link">
            <BsTwitter />
          </a>
        </div>

        <div className="hero_info">
          <div>
            <span className="hero_info-title">6 best places to visit</span>
            <a href="#destination">
              <ButtonLinkArrow text={"More"} style={{ color: "white" }} />
            </a>
          </div>

          <div className="hero_info-overlay">
            <img src={heroInfoImg} alt="" className="hero_info-img" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
