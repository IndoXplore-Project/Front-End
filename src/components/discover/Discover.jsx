import React, { useEffect } from "react";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import "./discover.css";
import cardImg from "./../../assets/img/card-img.jpg";

function Discover() {
  useEffect(() => {
    new Swiper(".discover_container", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      loop: true,
      spaceBetween: 32,
      coverflowEffect: {
        rotate: 0,
        slideShadows: false,
      },
    });
  }, []);

  // example data
  const categories = [
    { category: "Beach", tours: 10, img: cardImg },
    { category: "Mountain", tours: 9, img: cardImg },
    { category: "Lake", tours: 12, img: cardImg },
    { category: "National Park", tours: 20, img: cardImg },
    { category: "Historic Place", tours: 12, img: cardImg },
  ];

  return (
    <section className="discover section" id="discover">
      <div className="section-top">
        <h2 className="section_title">
          Explore Each Tourism Destinations in Indonesia
        </h2>
        <p className="section_desc">
          Discover Indonesia's Exquisite Tourism Spots, Each Offering a
          Distinctive Blend of Culture, Nature, and Adventure
        </p>
      </div>

      <div className="discover_container container swiper">
        <div className="swiper-wrapper">
          {categories.map((data, index) => (
            <div className="discover_card swiper-slide" key={index}>
              <img src={data.img} alt="" className="discover_img" />
              <div className="discover_data">
                <h2 className="discover_title">{data.category}</h2>
                <span className="discover_description">
                  {data.tours} tours available
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Discover;
