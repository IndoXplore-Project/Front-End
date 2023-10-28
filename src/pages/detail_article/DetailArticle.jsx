import React, { useEffect, useState } from "react";
import "./detail-article.css";
import { useParams } from "react-router-dom";
import { format } from "date-fns";

function DetailArticle() {
  const [article, setArticle] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(
          `https://indoxplore-project.cyclic.app/api/articles/${id}`
        );
        const json = await result.json();
        if (json.data && json.data.length > 0) {
          setArticle(json.data[0]);
        } else {
          console.error("Article not found");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!article) {
    return <div>Loading...</div>; // Menampilkan pesan loading saat data sedang dimuat
  }

  return (
    <div className="detail_article container">
      <h2 className="article_title">{article.title}</h2>
      <div className="article_info">
        <p>{format(new Date(article.publicationDate), "MMMM yyyy")}</p>
        <p id="dot">.</p>
        <p>{article.readTime} min read</p>
      </div>
      <img src={article.articleImg} alt={article.title} />
      <div className="content_article">{article.content}</div>
      <div className="article_tag">
        {article.tag.map((item, index) => (
          <span key={index} className="tag_item">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default DetailArticle;
