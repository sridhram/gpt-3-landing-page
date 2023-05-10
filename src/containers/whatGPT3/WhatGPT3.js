import React from "react";
import "./whatGPT3.css";
import { Feature } from "../../components/index";

const WhatGPT3 = () => {
  return (
    <article id="wgpt3" className="gpt3__whatgpt3">
      <Feature
        mainClass="gpt3__whatgpt3--flex gpt3__whatgpt3--space-btwn"
        title="What is GPT3"
        desc="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
        descClass="gpt3__whatgpt3--blue-txt gpt3__whatgpt3--what-desc gpt3__whatgpt3--padding-desc"
      />
      <section className="gpt3__whatgpt3--flex gpt3__whatgpt3--space-btwn">
        <h1 className="gpt3__whatGPT3__main-header">
          The possibilities are beyond your imagination
        </h1>
        <h3 className="gpt3__whatgpt3--orange-txt">Explore The Library</h3>
      </section>
      <section className="gpt3__whatgpt3--flex gpt3__whatgpt3--gap">
        <Feature
          title="Chatbots"
          desc="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
          descClass="gpt3__whatgpt3--blue-txt gpt3__whatgpt3--padding-desc"
        />
        <Feature
          title="Knowledgebase"
          desc="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
          descClass="gpt3__whatgpt3--blue-txt gpt3__whatgpt3--padding-desc"
        />
        <Feature
          title="Education"
          desc="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
          descClass="gpt3__whatgpt3--blue-txt gpt3__whatgpt3--padding-desc"
        />
      </section>
    </article>
  );
};

export default WhatGPT3;
