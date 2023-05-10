import react from "react";
import "./feature.css";

const Features = ({ mainClass, title, desc, descClass }) => {
  return (
    <section className={mainClass && `${mainClass}`}>
      <div>
        <div className="gpt3__whatgpt3--border-top-line"></div>
        <h3 className="gpt3__whatgpt3--white-txt">{title}</h3>
      </div>
      <p className={`${descClass}`}>{desc}</p>
    </section>
  );
};

export default Features;
