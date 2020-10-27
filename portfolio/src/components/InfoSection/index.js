import React, { useEffect } from "react";
import Selfie from "../../images/selfie-compressed.jpg";
import "../InfoSection/About.css";
import Aos from "aos";
import "../../../node_modules/aos/dist/aos.css";
import ReactLogo from "../../images/icons/reactlogo.svg";
import PythonLogo from "../../images/icons/pythonlogo.svg";
import NodeJsLogo from "../../images/icons/nodejslogo.svg";
import MongoLogo from "../../images/icons/mongologo.svg";
import JavaLogo from "../../images/icons/javalogo.svg";
import HtmlLogo from "../../images/icons/htmllogo.svg";
import ExpressLogo from "../../images/icons/expresslogo.svg";
import CsharpLogo from "../../images/icons/csharplogo.svg";
import Clogo from "../../images/icons/clogo.svg";
import BootstrapLogo from "../../images/icons/bootstraplogo.svg";
import JavaScriptLogo from "../../images/icons/javascriptlogo.svg";
import SqlLogo from "../../images/icons/sqllogo.svg";
import MaterialUI from "../../images/icons/materialuilogo.svg";
import Illustrator from "../../images/icons/illustrator.svg";
import XD from "../../images/icons/adobeXD.svg";
import Figma from "../../images/icons/figma.svg";
import Css from "../../images/icons/css3.svg";

export const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section className="aboutPage" id="AboutPage">
      <div data-aos="fade-up" className="aboutHeaderBig" id="bigheader">
        <h1>First, a short introduction</h1>
      </div>
      <div data-aos="fade-up" className="aboutContainer">
        <div className="imageWrapper">
          <img className="image" src={Selfie} />
        </div>
        <div className="textContainer">
          {/* <h1 className="aboutHeaderSmall" id="smallheader">
            Im Isak
          </h1> */}
          <p className="aboutText">
            I am currently a fourth year student at the MSc Interaction
            technology and design programme at Umeå University, Sweden.
            Cornerstones of the programme are UX-design, interactivity and
            accessability but also software development in a wide range of
            different technologies. My main interests are both front-end and
            back-end development as well as AI and UX-design. I'm always curious
            towards new technology and I'm always ready to learn new things.
          </p>
          <div className="traitIcons">
            <div
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-easing="ease-out-back"
              className="traitIcon"
            >
              <img src={require("../../images/QuickLearner.svg")} />
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="700"
              data-aos-easing="ease-out-back"
              className="traitIcon"
            >
              <img src={require("../../images/Curious.svg")} />
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="900"
              data-aos-easing="ease-out-back"
              className="traitIcon"
            >
              <img src={require("../../images/Adaptive.svg")} />
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="1100"
              data-aos-easing="ease-out-back"
              className="traitIcon"
            >
              <img src={require("../../images/Driven.svg")} />
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="skillsContainer">
          <h1 className="skillsHeader">Skills and experience</h1>
          <div className="skillIcons">
            {[
              { title: "ReactJS", img: ReactLogo },
              { title: "MongoDB", img: MongoLogo },
              { title: "Express", img: ExpressLogo },
              { title: "Python", img: PythonLogo },
              { title: "Java", img: JavaLogo },
              { title: "HTML5", img: HtmlLogo },
              { title: "CSS3", img: Css },
              { title: "Botstrap", img: BootstrapLogo },
              { title: "JavaScript", img: JavaScriptLogo },
              { title: "NodeJS", img: NodeJsLogo },
              { title: "C99", img: Clogo },
              { title: "C#", img: CsharpLogo },
              { title: "MySQL", img: SqlLogo },
              { title: "MaterialUI", img: MaterialUI },
              { title: "Adobe XD", img: XD },
              { title: "Illustrator", img: Illustrator },
              { title: "Figma", img: Figma },
            ].map((skill) => (
              <div className="skillIcon">
                <img src={skill.img}></img>
                <p>{skill.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
