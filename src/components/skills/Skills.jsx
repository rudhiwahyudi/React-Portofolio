import React, {useEffect} from 'react'
import "./skill.css"
import Frontend from "./Frontend"
import Backend from './Backend'
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(()=>{
    AOS.init({duration:1500})
  },[])
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title" data-aos="fade-up">
        Skills
      </h2>
      <span className="section__subtitle" data-aos="fade-up">
        My Technical Level
      </span>

      <div className="skills__container container grid" data-aos="fade-up">
        <Frontend />

        <Backend />
      </div>
    </section>
  );
}

export default Skills