import React from "react";
import "./detail-article.css";
import detailArticleImg from "./../../assets/img/detail-article-img.jpg";

function DetailArticle() {
  const articleData = {
    title: "Yogyakarta: Where History and Art Collide",
    releaseDate: "June 2, 2023",
    readTime: 5,
    content: `Nestled in the heart of Java, Yogyakarta, often referred to as Jogja, is
    a city that pulsates with a unique energy. It is a place where ancient
    history and vibrant contemporary art seamlessly merge, creating an
    atmosphere that is both evocative and inspiring.`,
    poster: detailArticleImg,
  };

  return (
    <div className="detail_article container">
      <h2 className="article_title">{articleData.title}</h2>
      <div className="article_info">
        <p>{articleData.releaseDate}</p>
        <p id="dot">.</p>
        <p>{articleData.readTime} min read</p>
      </div>
      <img src={articleData.poster} alt="" />
      <p className="content_article">{articleData.content}</p>
    </div>
  );
}

export default DetailArticle;
