import React, { useState, useEffect } from "react";
import "./explore.css";
import exploreImg from "./../../assets/img/explore-img.jpg";
import Card from "../../components/card/Card";
import { ButtonPrimary } from "../../components/button/Button";

const Explore = () => {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("Beach");
  const [province, setProvince] = useState("");
  const [destination, setDestination] = useState(null);
  const [totalDestination, setTotalDestination] = useState(0);

  const fetchCategoryData = async () => {
    try {
      const result = await fetch(
        "https://indoxplore-project.cyclic.app/api/destination-categories"
      );
      const json = await result.json();

      if (json.data) {
        setCategories(json.data);
      } else {
        console.error("No data found for categories");
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchCategoryData();
  }, []);

  const handleSelectChange = (event) => {
    setCategory(event.target.value);
  };

  const handleGetDestination = async () => {
    try {
      const formattedProvince = province.replace(/\b\w/g, (l) =>
        l.toUpperCase()
      );

      const result = await fetch(
        `https://indoxplore-project.cyclic.app/api/destinations/search?category=${category}&province=${formattedProvince}`
      );
      const json = await result.json();

      if (json.data) {
        setDestination(json.data);
        setTotalDestination(json.totalDestinations);
      } else {
        console.error("No data found for destinations");
        setDestination(null);
      }
    } catch (error) {
      console.error("Error fetching destinations:", error);
    }
  };

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
          <select
            id="destination_type"
            name="destination_type"
            value={category}
            onChange={handleSelectChange}
          >
            {categories &&
              categories.map((data) => (
                <option value={data.name} key={data._id}>
                  {data.name}
                </option>
              ))}
          </select>
          <input
            type="text"
            value={province}
            onChange={(e) => setProvince(e.target.value)}
            placeholder="Province..."
          />
          <ButtonPrimary text={"Search"} onClick={handleGetDestination} />
        </div>
      </div>
      <div className="section-top container section">
        <h2 className="section_title">Filter Your Search</h2>
        {destination ? (
          <p className="section_desc">
            There are {totalDestination} result matching.
          </p>
        ) : (
          <p className="section_desc">No Data</p>
        )}
      </div>
      <div className="card_container container grid">
        {destination &&
          destination.map((data) => (
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
    </div>
  );
};

export default Explore;
