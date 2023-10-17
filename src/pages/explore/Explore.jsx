import React from "react";
import "./explore.css";
import exploreImg from "./../../assets/img/explore-img.jpg";
import cardImg from "./../../assets/img/card-img.jpg";
import Card from "../../components/card/Card";
import { ButtonPrimary } from "../../components/button/Button";

function Explore() {
  const cardData = [
    {
      img: cardImg,
      destination: "destination 1",
      province: "province 1",
      rate: 4.5,
    },
    {
      img: cardImg,
      destination: "destination 2",
      province: "province 2",
      rate: 4.6,
    },
    {
      img: cardImg,
      destination: "destination 3",
      province: "province 3",
      rate: 4.7,
    },
  ];

  return (
    <div className="explore">
      <div className="explore_top">
        <img src={exploreImg} alt="" className="hero_page_img explore_img" />
        <div className="explore_title">
          <h1>Discover Your Dream Destinations</h1>
          <p>
            Embark on a Personalized Journey Tailored to Your Tastes and Uncover
            the World's Hidden Treasures
          </p>
        </div>
        <div className="explore_input">
          <select id="destination_type" name="destination_type">
            <option value="beach">Beach</option>
            <option value="mountain">Mountain</option>
            <option value="lake">Lake</option>
            <option value="national-park">National Park</option>
          </select>
          <input type="text" placeholder="Province..." />
          <ButtonPrimary text={"Search"} />
        </div>
      </div>
      <div className="section-top container section">
        <h2 className="section_title">Filter Your Search</h2>
        <p className="section_desc">There are 3 Result Matching</p>
      </div>
      <div className="card_container container grid">
        {cardData.map((data, index) => (
          <Card
            key={index}
            img={data.img}
            destination={data.destination}
            province={data.province}
            rate={data.rate}
            className="destination_card"
          />
        ))}
      </div>
    </div>
  );
}

export default Explore;
