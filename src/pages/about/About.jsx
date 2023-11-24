import React from "react";
import "./about.css";

function About() {
  return (
    <section className="about_page container section" id="about">
      <h1 className="about_page_title">
        <b>IndoXplore</b>
      </h1>
      <h3 className="about_page_subtitle">
        <i>Empowering Exploration Through Knowledge</i>
      </h3>
      <p className="about_page_desc">
        <span>
          <b>IndoXplore</b>
        </span>{" "}
        is more than a website—it's a gateway to the wonders of Indonesia. We're
        a team of passionate travel enthusiasts dedicated to curating the most
        comprehensive and reliable information about Indonesia's tourism places.
        Our goal is to make your journey through this diverse archipelago not
        only memorable but also seamless and filled with moments of awe. <br />
        <br />
        IndoXplore is your go-to online resource for discovering the captivating
        beauty and cultural richness of Indonesia's tourism destinations. Our
        platform is designed to provide comprehensive, reliable, and up-to-date
        information about the top attractions, landmarks, and hidden gems across
        the Indonesian archipelago.
      </p>
      <div className="vision_mission grid">
        <div className="mission">
          <h3>Mission</h3>
          <div className="mission_item">
            <p>01</p>
            <p>to inspire a love for adventure and discovery</p>
          </div>
          <div className="mission_item">
            <p>02</p>
            <p>
              to facilitate meaningful connections with Indonesia's natural and
              cultural heritage
            </p>
          </div>
          <div className="mission_item">
            <p>03</p>
            <p>
              to champion sustainable practices that ensure the preservation of
              this remarkable archipelago for future generations.
            </p>
          </div>
        </div>
        <div className="vision">
          <h3>Vision</h3>
          <p>
            To be the go-to resource for travelers seeking to uncover the
            beauty, culture, and adventure that Indonesia has to offer. We
            envision a community of explorers connected by their shared passion
            for discovering the hidden treasures of this enchanting archipelago.
          </p>
        </div>
      </div>
      <div className="join_us">
        <h2>Join Us in Exploring Indonesia's Tourism Wonders!</h2>
        <p>
          Whether you're a first-time traveler or a seasoned explorer,
          IndoXplore is here to be your trusted companion in uncovering the
          magic of Indonesia's top tourist destinations. Let us be your guide to
          an unforgettable Indonesian adventure.
        </p>
      </div>
    </section>
  );
}

export default About;
