import react from "react";
import "./article.css";

const Article = ({ imgUrl, date, blogTitle }) => {
  return (
    <div className="gpt3__article--main-container">
      <figure>
        <img src={imgUrl} alt="blog image" />
      </figure>
      <div className="gpt3__article--desc-container">
        <p className="gpt3__article__desc-container--date">{date}</p>
        <h3>{blogTitle}</h3>
        <p className="gpt3__article__desc-container--article">
          Read full article
        </p>
      </div>
    </div>
  );
};

export default Article;
