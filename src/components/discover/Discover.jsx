import React, { useState, useEffect } from "react";
import "./discover.css";
import ScrollReveal from "scrollreveal";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Discover() {
  const [categories, setCategories] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "60px",
        },
      },
    ],
  };
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

      <div className="discover_container container">
        <Slider {...settings}>
          {categories &&
            categories.map((data) => (
              <Link
                className="discover_card"
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
        </Slider>
      </div>
    </section>
  );
}

export default Discover;
