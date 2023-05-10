import React from "react";
import "./blog.css";
import { Article } from "../../components/index";
import blog1 from "../../assets/blog01.png";
import blog2 from "../../assets/blog02.png";
import blog3 from "../../assets/blog03.png";
import blog4 from "../../assets/blog04.png";
import blog5 from "../../assets/blog05.png";

const Blog = () => {
  const blogList = [
    {
      imgUrl: blog1,
      date: "Sep26, 2021",
      blogTitle: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    },
    {
      imgUrl: blog2,
      date: "Sep26, 2021",
      blogTitle: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    },
    {
      imgUrl: blog3,
      date: "Sep26, 2021",
      blogTitle: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    },
    {
      imgUrl: blog4,
      date: "Sep26, 2021",
      blogTitle: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    },
    {
      imgUrl: blog5,
      date: "Sep26, 2021",
      blogTitle: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    },
  ];
  return (
    <article className="gpt3__blog--main-container" id="blog">
      <h1 className="gpt3__blog--main-header">
        A lot is happening,<br/>We are blogging about it.
      </h1>
      <section className="gpt3__blog--blog-section">
        {blogList.map((blog) => {
          return (
            <Article
              imgUrl={blog.imgUrl}
              date={blog.date}
              blogTitle={blog.blogTitle}
            />
          );
        })}
      </section>
    </article>
  );
};

export default Blog;
