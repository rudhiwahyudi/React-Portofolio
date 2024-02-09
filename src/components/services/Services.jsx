import React, { useState, useEffect } from 'react'
import "./service.css"
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []); 

  const [toggleState, setToggleState] =useState(0)

  const toggleTab = (index) => {
    setToggleState(index)
  }

  return (
    <section className="services section" id="services">
      <h2 className="section__title" data-aos="fade-up">
        Services
      </h2>
      <span className="section__subtitle" data-aos="fade-up">
        What I Offer
      </span>

      <div className="services__container container grid">
        <div className="services__content">
          <div data-aos="fade-up">
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              Product <br /> Design
            </h3>
          </div>

          <span
            className="services__button"
            onClick={() => toggleTab(1)}
            data-aos="fade-up"
          >
            View More
            <i
              className="uil uil-arrow-right 
            services__button-icon"
            ></i>{" "}
          </span>

          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times 
                    services__modal-close"
              ></i>

              <h3 className="services__modal-title">Product Designer</h3>
              <p className="services__modal-description">
                These days, I focus on leading design at GiveDirectly, a
                nonprofit that lets donors send money directly to the world's
                poorest households.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I Develop the user interface.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Web page development.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I position your company brand.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Design and mockup od product for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div data-aos="fade-up">
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              UI/UX <br /> Designer
            </h3>
          </div>

          <span
            className="services__button"
            onClick={() => toggleTab(2)}
            data-aos="fade-up"
          >
            View More
            <i
              className="uil uil-arrow-right 
            services__button-icon"
            ></i>{" "}
          </span>

          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times 
                    services__modal-close"
              ></i>

              <h3 className="services__modal-title">UI/UX Designer</h3>
              <p className="services__modal-description">
                These days, I focus on leading design at GiveDirectly, a
                nonprofit that lets donors send money directly to the world's
                poorest households.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I Develop the user interface.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Web page development.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I position your company brand.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Design and mockup od product for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div data-aos="fade-up">
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">
              Visual <br /> Design
            </h3>
          </div>

          <span
            className="services__button"
            onClick={() => toggleTab(3)}
            data-aos="fade-up"
          >
            View More
            <i
              className="uil uil-arrow-right 
            services__button-icon"
            ></i>{" "}
          </span>

          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times 
                    services__modal-close"
              ></i>

              <h3 className="services__modal-title">Visual Designer</h3>
              <p className="services__modal-description">
                These days, I focus on leading design at GiveDirectly, a
                nonprofit that lets donors send money directly to the world's
                poorest households.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I Develop the user interface.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Web page development.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I position your company brand.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Design and mockup od product for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services