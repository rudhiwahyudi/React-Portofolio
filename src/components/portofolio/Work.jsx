import React, { useEffect, useState } from 'react';
import {projectsData} from "./Data";
import { projectsNav } from './Data';
import WorksItem from './WorksItem';
import AOS from "aos";
import "aos/dist/aos.css";

const Work = () => {
    // Scroll Animation 
    useEffect(() => {
      AOS.init({ duration: 1500 });
    }, []);

    // Filter Select
    const [item, setItem] = useState({name: 'All'})
    const [projects, setProjects] = useState ([])
    const [active, setActive] = useState (0)

    useEffect(() => {
        if (item.name === 'All'){
            setProjects(projectsData);
        } 

        else {
            const newProjects = projectsData.filter((projects) => {
                return projects.category === item.name;
            })

            setProjects(newProjects)
        }
    }, [item])

    const handleClick  = (e, index) => {
        setItem({name: e.target.textContent})
        setActive(index)
    }
  return (
    <div>
      <div className="work__filters" data-aos="fade-up"> 
        {projectsNav.map((item, index) => {
          return (
            <span onClick={(e) => {
                handleClick(e, index)
            }} className={`${active === index ? 'active-work': ""} work__item`} key={index}>
              {item.name}
            </span>
          );
        })}
      </div>

      <div className="work__container container grid" data-aos="fade-up">
        {projects.map((item) => {
            return <WorksItem item={item} key={item.id} />
        })}
      </div>
    </div>
  );
}

export default Work