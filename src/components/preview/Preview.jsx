import React, { useState, useEffect } from "react";
import "./preview.css";
import { AiOutlineStar } from "react-icons/ai";
import { ButtonPrimary } from "../button/Button";
import ScrollReveal from "scrollreveal";
import { Link } from "react-router-dom";

function Preview() {
  const [destination, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(
          "https://indoxplore-project.cyclic.app/api/destinations/highlight"
        );
        const json = await result.json();
        if (json.data) {
          setData(json.data);
          const sr = ScrollReveal({
            distance: "60px",
            duration: 2800,
          });
          sr.reveal(`.preview_img`, {
            origin: "left",
          });
          sr.reveal(`.preview_data`, {
            origin: "right",
            interval: 100,
          });
        } else {
          console.error("No data found");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  if (!destination) {
    return <div></div>;
  }

  return (
    <section className="preview section">
      <div className="preview_container container grid">
        <img
          src={destination.gallery}
          alt=""
          className="preview_img"
          key={destination._id} // Pastikan kunci unik
        />
        <div className="preview_data">
          <h2 className="section_title preview_title">{destination.name}</h2>
          <div id="preview_main">
            <div className="rating">
              <AiOutlineStar />
              <span>{destination.rate}</span>
            </div>
            <span id="dot">.</span>
            <p>{destination.categoryName}</p>
          </div>
          <div id="preview_desc">
            <p>{destination.description.split(" ").slice(0, 20).join(" ")}</p>
            <p>
              <span>Province</span> : {destination.province}
            </p>
            <p>
              <span>Address</span> : {destination.address}
            </p>
            <p>
              <span>Operational Time</span> : {destination.operationalTime}
            </p>
          </div>
          <Link to={`/destinations/details/${destination._id}`}>
            <ButtonPrimary text={"See Details"} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Preview;
