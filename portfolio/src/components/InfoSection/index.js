import React, { useEffect } from "react";
import Selfie from "../../images/bnwcompressed.jpg";
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
          <img
            className="image"
            src={Selfie}
            alt="Oops, something went wrong my selfie"
          />
        </div>
        <div className="textContainer">
          {/* <h1 className="aboutHeaderSmall" id="smallheader">
            Im Isak
          </h1> */}
          <p className="aboutText">
            I am currently working as a software development consultant at Netlight, Stockholm, Sweden. My main interests are both front-end and back-end
            development as well as AI and UI and UX-design. I'm always striving
            to develop my skill set as much as possible. My passion lies in
            technology, creativity, problem-solving and my drive comes from
            wanting to build the future. Whether that’s via design, development
            or both, I want to be a part of it.
          </p>
          <div className="traitIcons">
            <div
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-easing="ease-out-back"
              className="traitIcon"
            >
              <img
                src={require("../../images/QuickLearner.svg")}
                alt="Quick Learner"
              />
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="700"
              data-aos-easing="ease-out-back"
              className="traitIcon"
            >
              <img src={require("../../images/Curious.svg")} alt="Curious" />
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="900"
              data-aos-easing="ease-out-back"
              className="traitIcon"
            >
              <img src={require("../../images/Adaptive.svg")} alt="Adaptive" />
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="1100"
              data-aos-easing="ease-out-back"
              className="traitIcon"
            >
              <img src={require("../../images/Driven.svg")} alt="Driven" />
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="skillsContainer">
          <h1 className="skillsHeader">Skills and experience</h1>
          <div className="skillIcons">
            {[
              { title: "ReactJS", img: ReactLogo },
              { title: "JavaScript", img: JavaScriptLogo },
              { title: "Python", img: PythonLogo },
              { title: "Java", img: JavaLogo },
              { title: "HTML5", img: HtmlLogo },
              { title: "CSS3", img: Css },
              { title: "NodeJS", img: NodeJsLogo },
              { title: "MySQL", img: SqlLogo },
              { title: "MongoDB", img: MongoLogo },
              { title: "C99", img: Clogo },
              { title: "C#", img: CsharpLogo },
              { title: "Express", img: ExpressLogo },
              { title: "Bootstrap", img: BootstrapLogo },
              { title: "MaterialUI", img: MaterialUI },
              { title: "Figma", img: Figma },
              { title: "Adobe XD", img: XD },
              { title: "Illustrator", img: Illustrator },
            ].map((skill) => (
              <div className="skillIcon">
                <img src={skill.img} alt="icon missing"></img>
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
