import React, { useState, useEffect } from "react";
import "./article.css";
import { ButtonLinkArrow } from "../../components/button/Button";
import { Link } from "react-router-dom";

function Article() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(
          "https://indoxplore-project.cyclic.app/api/articles"
        );
        const json = await result.json();
        setData(json.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="article_page section">
      <div className="section-top container">
        <h2 className="section_title">
          <b>Explore a World of Diverse Topics and Themes</b>
        </h2>
        <p className="section_desc">
          From Travel Journals to How-to Guides, Dive into a Collection of
          Engaging and Informative Articles.
        </p>
      </div>
      <div className="article_page_card_container container grid">
        {data &&
          data.map((data) => (
            <div className="article_page_card" key={data._id}>
              <img src={data.articleImg} alt="" />
              <div className="article_page_content">
                <p>{data.title}</p>
                <Link to={`/articles/details/${data._id}`}>
                  <ButtonLinkArrow
                    text={"Read More"}
                    style={{ color: "var(--first-color)" }}
                  />
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Article;
