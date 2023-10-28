import React, { useState, useRef, useEffect } from "react";
import "./navbar.css";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";

function Navbar({ isHomePage }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navRef = useRef();

  const showBar = () => {
    navRef.current.classList.add("show-menu");
  };

  const removeShowBar = () => {
    navRef.current.classList.remove("show-menu");
  };

  const linkAction = () => {
    removeShowBar();
  };

  return (
    <header
      className={`header ${isHomePage ? "header-home" : ""} ${
        scrolled ? "scrolled" : ""
      }`}
      id="header"
    >
      <nav className="nav container">
        <NavLink to={"/"} className="nav_logo">
          <b>IndoXplore</b>
        </NavLink>

        <div className="nav_menu" id="nav-menu" ref={navRef}>
          <ul className="nav_list">
            <li className="nav_item">
              <NavLink to="/" className="nav_link" onClick={linkAction}>
                Home
              </NavLink>
            </li>
            <li className="nav_item">
              <NavLink to="/about" className="nav_link" onClick={linkAction}>
                About
              </NavLink>
            </li>
            <li className="nav_item">
              <NavLink to="/explore" className="nav_link" onClick={linkAction}>
                Explore
              </NavLink>
            </li>
            <li className="nav_item">
              <NavLink to="/articles" className="nav_link" onClick={linkAction}>
                Article
              </NavLink>
            </li>
          </ul>

          <AiOutlineClose className="nav_close" onClick={removeShowBar} />
        </div>

        <div className="nav_toggle" id="nav-toggle">
          <AiOutlineMenu onClick={showBar} />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
