import React from "react";
import "./destination.css";
import cardImg from "./../../assets/img/card-img.jpg";
import { AiOutlineStar } from "react-icons/ai";
import { ButtonLinkArrow } from "./../button/Button";
import Card from "../card/Card";

function Destination() {
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
    {
      img: cardImg,
      destination: "destination 4",
      province: "province 4",
      rate: 4.5,
    },
    {
      img: cardImg,
      destination: "destination 5",
      province: "province 5",
      rate: 4.6,
    },
    {
      img: cardImg,
      destination: "destination 6",
      province: "province 6",
      rate: 4.7,
    },
  ];
  return (
    <section className="destination section" id="destination">
      <div className="section-top">
        <h2 className="section_title">
          Top 6 Must-Visit Destinations in Indonesia
        </h2>
        <p className="section_desc">
          Explore Indonesia's Spectacular Sites, from Tropical Paradises to
          Ancient Temples, for an Unforgettable Adventure.
        </p>
      </div>

      <div className="destination_container container grid">
        {cardData.map((data, index) => (
          <Card
            key={index}
            img={data.img}
            destination={data.destination}
            province={data.province}
            rate={data.rate}
          />
        ))}
      </div>
    </section>
  );
}

export default Destination;
