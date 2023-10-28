import React from "react";
import "./card.css";
import { AiOutlineStar } from "react-icons/ai";
import { ButtonLinkArrow } from "./../button/Button";
import { Link } from "react-router-dom";

function Card({ id, img, destination, province, rate, className }) {
  return (
    <div className={`card ${className}`}>
      <img src={img} alt="" className="card_img" />
      <div className="rating">
        <AiOutlineStar />
        <span>{rate}</span>
      </div>
      <div className="card_data">
        <h3>{destination}</h3>
        <p>{province}</p>
      </div>
      <Link to={`/destinations/details/${id}`} className="arrow-btn">
        <ButtonLinkArrow style={{ color: "white" }} />
      </Link>
    </div>
  );
}

export default Card;
