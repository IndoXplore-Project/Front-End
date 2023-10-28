import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import "./home.css";
import Hero from "./../../components/hero/Hero";
import About from "./../../components/about/About";
import Discover from "./../../components/discover/Discover";
import Preview from "./../../components/preview/Preview";
import Destination from "./../../components/destination/Destination";
import Article from "./../../components/article/Article";

function Home() {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: "60px",
      duration: 2800,
    });

    sr.reveal(`.hero_data, .hero_social-link, .hero_info`, {
      origin: "top",
      interval: 100,
    });

    sr.reveal(`.about_data`, {
      origin: "left",
    });

    sr.reveal(`.about_img-overlay`, {
      origin: "right",
      interval: 100,
    });
  }, []);

  return (
    <div className="main">
      <Hero />
      <About />
      <Discover />
      <Preview />
      <Destination />
      <Article />
    </div>
  );
}

export default Home;
