import React from "react";
import "./article.css";
import articleImg from "./../../assets/img/article-img.jpg";
import { ButtonSecondary } from "../button/Button";

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
    <section className="article section" id="article">
      <div className="section-top container">
        <h2 className="section_title">Latest Article</h2>
      </div>

      <div className="article_container container">
        {articles.map((data, index) => (
          <div className="article_card" key={index}>
            <div className="article_content">
              <div className="article_data">
                <span>{data.releaseDate}</span>
                <span id="tag">{data.tag}</span>
              </div>
              <div className="article_text">
                <h3>{data.title}</h3>
                <p>{data.content}</p>
              </div>
              <ButtonSecondary text={"Read More"} />
            </div>
            <img src={data.img} alt="" className="article-img" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Article;
