import React from "react";
import "./card.css";
import { AiOutlineStar } from "react-icons/ai";
import { ButtonLinkArrow } from "./../button/Button";

function Card({ img, destination, province, rate }) {
  return (
    <div className="card">
      <img src={img} alt="" className="card_img" />
      <div className="rating">
        <AiOutlineStar />
        <span>{rate}</span>
      </div>
      <div className="card_data">
        <h2>{destination}</h2>
        <p>{province}</p>
      </div>
      <div className="arrow-btn">
        <ButtonLinkArrow style={{ color: "white" }} />
      </div>
    </div>
  );
}

export default Card;
