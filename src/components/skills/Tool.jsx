import React, {useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import ToolImage1 from "../../assets/tool_1.png"
import ToolImage2 from "../../assets/tool_2.png"
import ToolImage3 from "../../assets/tool_3.png"
import ToolImage4 from "../../assets/tool_4.png"
import ToolImage5 from "../../assets/tool_5.png"
import ToolImage6 from "../../assets/tool_6.png"
import ToolImage7 from "../../assets/tool_7.png"
import ToolImage8 from "../../assets/tool_8.png"
import ToolImage9 from "../../assets/tool_9.png"
import ToolImage10 from "../../assets/tool_10.png"
import ToolImage11 from "../../assets/tool_11.png"
import ToolImage12 from "../../assets/tool_12.png"


const Tool = () => {

    useEffect(() => {
      AOS.init({ duration: 1500 });
    }, []);

  return (
    <div className="tool__content">
      <div className="tool__box">
        <div className="tool__group">
          <div className="tools__data" data-aos="zoom-in">
            <img src={ToolImage1} alt="image_1" className="tool__img" />
            <span className="tool__name">ReactJS</span>
          </div>

          <div className="tools__data" data-aos="zoom-in">
            <img src={ToolImage2} alt="image_1" className="tool__img" />
            <span className="tool__name">JavaScript</span>
          </div>

          <div className="tools__data" data-aos="zoom-in">
            <img src={ToolImage3} alt="image_1" className="tool__img" />
            <span className="tool__name">HTML</span>
          </div>

          <div className="tools__data" data-aos="zoom-in">
            <img src={ToolImage4} alt="image_1" className="tool__img" />
            <span className="tool__name">CSS</span>
          </div>

          <div className="tools__data" data-aos="zoom-in">
            <img src={ToolImage5} alt="image_1" className="tool__img" />
            <span className="tool__name">Photoshop</span>
          </div>

          <div className="tools__data" data-aos="zoom-in">
            <img src={ToolImage6} alt="image_1" className="tool__img" />
            <span className="tool__name">Adobe Illustrator</span>
          </div>

          <div className="tools__data" data-aos="zoom-in">
            <img src={ToolImage7} alt="image_1" className="tool__img" />
            <span className="tool__name">Figma</span>
          </div>

          <div className="tools__data" data-aos="zoom-in">
            <img src={ToolImage8} alt="image_1" className="tool__img" />
            <span className="tool__name">CorelDraw</span>
          </div>

          <div className="tools__data" data-aos="zoom-in">
            <img src={ToolImage9} alt="image_1" className="tool__img" />
            <span className="tool__name">Kotlin</span>
          </div>

          <div className="tools__data" data-aos="zoom-in">
            <img src={ToolImage10} alt="image_1" className="tool__img" />
            <span className="tool__name">Python</span>
          </div>

          <div className="tools__data" data-aos="zoom-in">
            <img src={ToolImage11} alt="image_1" className="tool__img" />
            <span className="tool__name">GitHub</span>
          </div>

          <div className="tools__data" data-aos="zoom-in">
            <img src={ToolImage12} alt="image_1" className="tool__img" />
            <span className="tool__name">Visual Studio Code</span>
          </div>

          <div className="tools__data" data-aos="zoom-in">
            <img src={ToolImage1} alt="image_1" className="tool__img" />
            <span className="tool__name">ReactNative</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tool