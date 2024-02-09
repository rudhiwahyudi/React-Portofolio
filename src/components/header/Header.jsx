import React from 'react'
import './header.css'
import { useState } from 'react';
import Logo from "../../assets/logo.png"

const Header = () => {
  /* ========== CHANGE BACKGORUND HEADER ========== */
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  /* ========== TOGGLE MENU ========== */
  const [Toggle, showMenu] = useState(false);
  const [activeNavbar, setActiveNavbar] = useState(" ")

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          {/* Rudhi */}
          <img src={Logo} alt="logo" />
        </a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNavbar("#home")}
                className={
                  activeNavbar === "#home"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-estate nav__icon"></i>Home
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActiveNavbar("#about")}
                className={
                  activeNavbar === "#about"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-user nav__icon"></i>About
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => setActiveNavbar("#skills")}
                className={
                  activeNavbar === "#skills"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-file-alt nav__icon"></i>Skills
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#services"
                onClick={() => setActiveNavbar("#services")}
                className={
                  activeNavbar === "#services"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-briefcase-alt nav__icon"></i>Services
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#portofolio"
                onClick={() => setActiveNavbar("#portofolio")}
                className={
                  activeNavbar === "#portofolio"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-scenery nav__icon"></i>Portofolio
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" onClick={() => setActiveNavbar("#contact")}
                className={
                  activeNavbar === "#contact"
                    ? "nav__link active-link"
                    : "nav__link"}>
                <i className="uil uil-message nav__icon"></i>Contact
              </a>
            </li>
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
}

export default Header