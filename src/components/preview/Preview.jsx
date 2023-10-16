import React from "react";
import "./preview.css";
import { AiOutlineStar } from "react-icons/ai";
import { ButtonPrimary } from "../button/Button";
import previewImg from "./../../assets/img/preview-img.jpg";

function Preview() {
  return (
    <section className="preview section">
      <div className="preview_container container grid">
        <img src={previewImg} alt="" className="preview_img" />
        <div className="preview_data">
          <h2 className="section_title preview_title">Borobudur</h2>
          <div id="preview_main">
            <div className="rating">
              <AiOutlineStar />
              <span>4,7</span>
            </div>
            <span id="dot">.</span>
            <p>Historic sites</p>
          </div>
          <div id="preview_desc">
            <p>
              Borobudur, also transcribed Barabudur is a 9th-century Mahayana
              Buddhist temple in Magelang Regency...
            </p>
            <p>
              <span>Province</span> : Central Java
            </p>
            <p>
              <span>Address</span> : Jl. Badrawati, Kw. Candi Borobudur,
              Borobudur, Kec. Borobudur, Kabupaten Magelang
            </p>
            <p>
              <span>Operational Time</span> : Every Day 6.30 AM - 4.30 PM
            </p>
          </div>
          <ButtonPrimary text={"See Details"} />
        </div>
      </div>
    </section>
  );
}

export default Preview;
