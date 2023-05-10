import React from "react";
import { Feature } from "../../components/index";
import "./features.css";
const Features = () => {
  const featuresArr = [
    {
      title: "Improving end distrusts instantly",
      desc: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
      descClass: "gpt3__features--flex",
    },
    {
      title: "Become the tended active",
      desc: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
      descClass: "gpt3__features--flex",
    },
    {
      title: "Message or am nothing",
      desc: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",
      descClass: "gpt3__features--flex",
    },
    {
      title: "Really boy law county",
      desc: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.",
      descClass: "gpt3__features--flex",
    },
  ];

  return (
    <article id="features" className="gpt3__features--section">
      <section>
        <h1 className="gpt3__features--header">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h1>
        <p className="gpt3__features--register">
          Request Early Access to Get Started
        </p>
      </section>
      <section className="gpt3__features--list">
        {featuresArr.map((feature, index) => {
          return (
            <Feature
              mainClass="gpt3__features--feature-container"
              key={`${feature.title}_${index}`}
              title={feature.title}
              desc={feature.desc}
              descClass={feature.descClass}
            />
          );
        })}
      </section>
    </article>
  );
};

export default Features;
