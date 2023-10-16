import React from "react";
import "./about.css";
import aboutImg1 from "../../assets/img/about-img-1.jpg";
import aboutImg2 from "../../assets/img/about-img-2.jpg";
import { ButtonPrimary } from "../button/Button";

function About() {
  // const sr = ScrollReveal({
  //   distance: "60px",
  //   duration: 2800,
  //   reset: true,
  // });

  // sr.reveal(`.about_data`, {
  //   origin: "left",
  // });

  // sr.reveal(`.about_img-overlay`, {
  //   origin: "right",
  //   interval: 100,
  // });

  return (
    <section className="about section" id="about">
      <div className="about_container container grid">
        <div className="about_data">
          <h2 className="section_title about_title">
            More Information About
            <br />{" "}
            <span id="brand">
              <b>IndoXplore</b>
            </span>
          </h2>
          <p className="about_description">
            IndoXplorer is more than a website—it's a gateway to the wonders of
            Indonesia. We're a team of passionate travel enthusiasts dedicated
            to curating the most comprehensive and reliable information about
            Indonesia's tourism places.
          </p>
          <ButtonPrimary text={"Learn More"} />
        </div>

        <div className="about_img">
          <div className="about_img-overlay">
            <img src={aboutImg1} alt="" className="about_img-one" />
          </div>

          <div className="about_img-overlay">
            <img src={aboutImg2} alt="" className="about_img-two" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
