import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <article className="gpt3__footer--main-container">
      <h1 className="gpt3__footer--main-header">
        Do you want to step in to the future before others
      </h1>
      <button className="gpt3__footer--request-access-btn">
        Request Early Access
      </button>
      <section className="gpt3__footer--footer-links">
        <div>
          <h3>GPT-3</h3>
          <p className="gpt3__footer--address">
            Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
          </p>
        </div>
        <ul>
          <li>Links</li>
          <li>Overons</li>
          <li>Social Media</li>
          <li>Counters</li>
          <li>Contact</li>
        </ul>
        <ul>
          <li>Company</li>
          <li>Terms&conditions</li>
          <li>Privacy Policy</li>
          <li>Contact</li>
        </ul>
        <ul className="gpt3__footer--footer-links--last-ul">
          <li>Get in touch</li>
          <li className="gpt3__footer--address">
            Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
          </li>
          <li>085-132567</li>
          <li>info@payme.net</li>
        </ul>
      </section>
      <footer>© 2021 GPT-3. All rights reserved.</footer>
    </article>
  );
};

export default Footer;
