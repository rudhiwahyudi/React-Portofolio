import React, {useEffect} from 'react'
import "./skill.css"
// import Frontend from "./Frontend"
// import Backend from './Backend'
import Tool from './Tool'
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(()=>{
    AOS.init({duration:1500})
  },[])
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Tools & Tech Stack</h2>
      <span className="section__subtitle">My Tools & Tech Stack</span>

      <div className="skills__container container grid" data-aos="fade-up">
        <Tool />
      </div>
    </section>
  );
}

export default Skills