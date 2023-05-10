import react, { useRef, useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import "./navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const menuRef = useRef();
  return (
    <nav className="gpt3__navbar">
      <section className="gpt3__mobile-only-icons">
        <picture className="gpt3__navbar-logo">
          <img src={logo} alt="logo" />
        </picture>
        {!toggleMenu ? (
          <RiMenu3Line
            className="mobile-only__menu toggle-menu__mobile"
            onClick={() => setToggleMenu(true)}
          />
        ) : (
          <RiCloseLine
            className="mobile-only__menu"
            onClick={() => {
              setTimeout(() => {
                setToggleMenu(false);
              }, 500);
              menuRef.current.classList.add("scale-out-ver-top");
            }}
          />
        )}
      </section>
      <ul
        className={`gpt3__navbar-links ${
          toggleMenu ? "scale-in-ver-top" : "hide"
        }`}
        ref={menuRef}
      >
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#wgpt3">What is GPT3?</a>
        </li>
        <li>
          <a href="#possibility">Open AI</a>
        </li>
        <li>
          <a href="#features">Case Studies</a>
        </li>
        <li>
          <a href="#blog">Library</a>
        </li>
        <li className="push-right">
          <button>Sign in</button>
        </li>
        <li>
          <button className="gpt3__navbar__signin-container--signup orange-button">
            Sign up
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
