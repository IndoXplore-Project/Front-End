import React, { useState, useEffect } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";

import "./discover.css";
import ScrollReveal from "scrollreveal";
import { Link } from "react-router-dom";

function Discover() {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(
          "https://indoxplore-project.cyclic.app/api/destination-categories"
        );
        const json = await result.json();

        if (json.data) {
          setCategories(json.data);
        } else {
          console.error("No data found");
        }

        const sr = ScrollReveal({
          distance: "60px",
          duration: 2800,
        });

        sr.reveal(`.discover_container`, {
          origin: "top",
          interval: 100,
        });

        new Swiper(".discover_container", {
          grabCursor: true,
          slidesPerView: "auto",
          spaceBetween: 32,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!categories) {
    return <div></div>;
  }

  return (
    <section className="discover section" id="discover">
      <div className="section-top container">
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
          {categories &&
            categories.map((data) => (
              <Link
                className="discover_card swiper-slide"
                key={data._id}
                to={`/categories/${data._id}`}
              >
                <img src={data.categoryImg} alt="" className="discover_img" />
                <div className="discover_data">
                  <h2 className="discover_title">{data.name}</h2>
                  <span className="discover_description">
                    {data.totalDestinations} tours available
                  </span>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Discover;
