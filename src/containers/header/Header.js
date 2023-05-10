import React from "react";
import "./header.css";
import ai from "../../assets/ai.png";
import people from "../../assets/people.png";

const Header = () => {
  return (
    <main className="gpt3__header--main">
      <section className="gpt3__header--description-container">
        <h1 className="gpt3__header__heading-txt">
          Let’s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p className="gpt3__header__description-container--description">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <section className="gpt3__header--email-container">
          <input
            className="gpt3__header--email-input"
            placeholder="Your Email address"
          />
          <button className="gpt3__header--email-btn orange-button">
            Get Started
          </button>
        </section>
        <section className="gpt3__header--ppl-container">
          <figure>
            <img src={people} />
          </figure>
          <p>1,600 people requested access a visit in last 24 hours</p>
        </section>
      </section>
      <figure>
        <img src={ai} />
      </figure>
    </main>
  );
};

export default Header;
