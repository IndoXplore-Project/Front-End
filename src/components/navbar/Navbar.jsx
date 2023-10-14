import React, { useRef } from "react";
import "./navbar.css";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Navbar() {
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
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav_logo">
          IndoXplore
        </a>

        <div className="nav_menu" id="nav-menu" ref={navRef}>
          <ul className="nav_list">
            <li className="nav_item">
              <a href="#" className="nav_link active-link" onClick={linkAction}>
                Home
              </a>
            </li>
            <li className="nav_item">
              <a href="#" className="nav_link" onClick={linkAction}>
                About
              </a>
            </li>
            <li className="nav_item">
              <a href="#" className="nav_link" onClick={linkAction}>
                Discover
              </a>
            </li>
            <li className="nav_item">
              <a href="#" className="nav_link" onClick={linkAction}>
                Article
              </a>
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