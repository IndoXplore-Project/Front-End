import React from "react";
import "./category.css";
import categoryImg from "./../../assets/img/category-img.jpg";
import cardImg from "./../../assets/img/card-img.jpg";
import Card from "../../components/card/Card";

function Category() {
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
    <div className="category">
      <img src={categoryImg} alt="" className="hero_page_img category_img" />
      <div className="section-top container">
        <h2 className="section_title">Explore Beach</h2>
        <p className="section_desc">
          Dive into a world of sun-kissed shores, crystal waters, and coastal
          wonders waiting to be discovered.
        </p>
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

export default Category;
