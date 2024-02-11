import React, {useEffect} from 'react'
import "./portofolio.css"
import AOS from "aos";
import "aos/dist/aos.css";
import Work from './Work';

const Portofolio = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []); 
  return (
    <section className="portofolio section" id="portofolio">
      <h2 className="section__title">
        Portofolio
      </h2>
      <span className="section__subtitle">
        My Project
      </span>

      <Work />
    </section>
  );
}

export default Portofolio