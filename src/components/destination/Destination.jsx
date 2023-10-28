import React, { useState, useEffect } from "react";
import "./destination.css";
import Card from "../card/Card";
import ScrollReveal from "scrollreveal";

function Destination() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(
          "https://indoxplore-project.cyclic.app/api/destinations/rates"
        );
        const json = await result.json();
        setData(json.data);

        const sr = ScrollReveal({
          distance: "60px",
          duration: 2800,
        });

        sr.reveal(`.card`, {
          origin: "top",
          interval: 100,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
        {data &&
          data.map((data) => (
            <Card
              key={data._id}
              id={data._id}
              img={data.destinationImg}
              destination={data.name}
              province={data.province}
              rate={data.rate}
              className="destination_card"
            />
          ))}
      </div>
    </section>
  );
}

export default Destination;
