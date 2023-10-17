import React from "react";
import "./article.css";
import { ButtonLinkArrow } from "../../components/button/Button";
import articleImg from "./../../assets/img/article-img.jpg";

function Article() {
  // example data
  const articles = [
    {
      title: "Exploring the Enchanting Beauty of Bali",
      content:
        'Bali, often referred to as the "Island of the Gods," is a gem in Indonesia\'s vast archipelago. Known for its lush landscapes, rich cultural heritage, and pristine beaches, Bali offers an array of experiences...',
      releaseDate: "February 2023",
      tag: "Bali",
      img: articleImg,
    },
    {
      title: "Exploring the Enchanting Beauty of Yogyakarta",
      content:
        'Yogyakarta, often referred to as the "Island of the Gods," is a gem in Indonesia\'s vast archipelago. Known for its lush landscapes, rich cultural heritage, and pristine beaches, Yogyakarta offers an array of experiences...',
      releaseDate: "February 2023",
      tag: "Yogyakarta",
      img: articleImg,
    },
  ];
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
        {articles.map((data, index) => (
          <div className="article_page_card" key={index}>
            <img src={data.img} alt="" />
            <div className="article_page_content">
              <p>{data.title}</p>
              <ButtonLinkArrow
                text={"Read More"}
                style={{ color: "var(--first-color)" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Article;
