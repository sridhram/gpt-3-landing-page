import React from "react";
import "./possibility.css";
import possibility from "../../assets/possibility.png";
const Possibility = () => {
  return (
    <article className="gpt3__possibility--main-container" id="possibility">
      <figure>
        <img src={possibility} alt="possibility hero image" />
      </figure>
      <section className="gpt3__possibility--desc-container">
        <h3>Request Early Access to Get Started</h3>
        <h1>The possibilities are beyond your imagination</h1>
        <p className="gpt3__possibility--desc-container--desc">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <p className="gpt3__possibility--desc-container--request">
          Request Early Access to Get Started
        </p>
      </section>
    </article>
  );
};

export default Possibility;
