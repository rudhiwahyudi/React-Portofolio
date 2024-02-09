import React, {useEffect} from 'react'
import "./portofolio.css"
import AOS from "aos";
import "aos/dist/aos.css";

const Portofolio = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []); 
  return (
    <section className="portofolio section" id="portofolio">
      <h2 className="section__title" data-aos="fade-up">
        Portofolio
      </h2>
      <span className="section__subtitle" data-aos="fade-up">
        My Project
      </span>
    </section>
  );
}

export default Portofolio