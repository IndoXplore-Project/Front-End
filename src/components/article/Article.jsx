import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import "./article.css";
import { ButtonSecondary } from "../button/Button";
import ScrollReveal from "scrollreveal";
import { Link } from "react-router-dom";

function Article() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(
          "https://indoxplore-project.cyclic.app/api/articles/latest"
        );
        const json = await result.json();
        setData(json.data);

        const sr = ScrollReveal({
          distance: "60px",
          duration: 2800,
        });

        sr.reveal(`.article_content`, {
          origin: "left",
        });

        sr.reveal(`.article-img`, {
          origin: "right",
          interval: 100,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="article section" id="article">
      <div className="section-top container">
        <h2 className="section_title">Latest Article</h2>
      </div>

      <div className="article_container container">
        {data &&
          data.map((data) => (
            <div className="article_card" key={data._id}>
              <div className="article_content">
                <div className="article_data">
                  <span>
                    {format(new Date(data.publicationDate), "MMMM yyyy")}
                  </span>
                  <span id="tag">{data.tag[0]}</span>
                </div>
                <div className="article_text">
                  <h3>{data.title}</h3>
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        data.content.split(" ").slice(0, 20).join(" ") + "...",
                    }}
                  />
                </div>
                <Link to={`/articles/details/${data._id}`}>
                  <ButtonSecondary text={"Read More"} />
                </Link>
              </div>
              <img src={data.articleImg} alt="" className="article-img" />
            </div>
          ))}
      </div>
    </section>
  );
}

export default Article;
