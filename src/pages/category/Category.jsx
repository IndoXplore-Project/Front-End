import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./category.css";
import Card from "../../components/card/Card";

function Category() {
  const [category, setCategory] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(
          `https://indoxplore-project.cyclic.app/api/destination-categories/${id}`
        );
        const json = await result.json();
        setCategory(json.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!category) {
    return <div>Loading...</div>; // Menampilkan pesan loading saat data sedang dimuat
  }

  return (
    <div className="category">
      <img
        src={category.categoryImg}
        alt=""
        className="hero_page_img category_img"
      />
      <div className="section-top container">
        <h2 className="section_title">Explore {category.name}</h2>
        <p className="section_desc">{category.description}</p>
      </div>
      <div className="card_container container grid">
        {category.destinations.map((data) => (
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
}

export default Category;
