import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import ProfilePicture from "../../assets/ProfilePicture.png";
import FujitsuImg from "../../assets/fujitsu.png";
import BMMotorImg from "../../assets/bmmotor.png";
import BootstrapImg from "../../assets/bootstrap.png";
import CImg from "../../assets/c#.png";
import FigmaImg from "../../assets/figma.png";
import HtmlCssImg from "../../assets/htmlcss.png";
import JavascriptImg from "../../assets/javascript.png";
import ReactImg from "../../assets/react.png";
import emailjs from "emailjs-com";

import { Context as ProjectsContext } from "../../context/projectsContext";

function Home() {
  const { state } = useContext(ProjectsContext);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "gmail",
        "template_qqvgmng",
        e.target,
        "user_paH5LaWnvKAGB2D6dNdk8"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="home-container">
      <div className="innerContainer">
        <main id="home" className="grid">
          <div className="first-column">
            <img src={ProfilePicture} alt="Profile Picture" />
          </div>
          <div className="second-column">
            <h1>Hi, Welcome to my porfolio page.</h1>
            <h1>
              I'm a fan of UI/UX design and front-end developer from Jakarta,
              Indonesia.
            </h1>
          </div>
        </main>

        <section id="projects" className="projects">
          <h2>Some of My Works</h2>
          <div className="grid">
            {state.map((item) => {
              return (
                <Link
                  key={item.id}
                  className="project-first"
                  to={"/projectdetails/" + item.id}
                >
                  <img src={item.image.default} alt="Fujitsu Project" />
                  <p>{item.name}</p>
                </Link>
              );
            })}
            {/* <a className="project-first" href="/">
              <img src={FujitsuImg} alt="Fujitsu Project" />
              <p>Fujitsu Indonesia</p>
            </a>
            <a class="project-second" href="/">
              <img src={BMMotorImg} alt="BM Motor Project" />
              <p>Bavaria Mercindo Motor</p>
            </a> */}
          </div>
        </section>

        <section id="skills" className="skills">
          <h2>Things I Can Do</h2>
          <div className="grid">
            <div className="skills-container">
              <img src={ReactImg} alt="React Skills" />
              <p>React</p>
            </div>
            <div className="skills-container">
              <img src={ReactImg} alt="React Native Skills" />
              <p>React Native</p>
            </div>
            <div className="skills-container">
              <img src={HtmlCssImg} alt="Html Css Skills" />
              <p>HTML/CSS</p>
            </div>
            <div className="skills-container">
              <img src={JavascriptImg} alt="Javascript Skills" />
              <p>Javascript</p>
            </div>
            <div className="skills-container">
              <img src={CImg} alt="C# Skills" />
              <p>C#</p>
            </div>
            <div className="skills-container">
              <img src={BootstrapImg} alt="Bootstrap Skills" />
              <p>Bootstrap</p>
            </div>
            <div className="skills-container">
              <img src={FigmaImg} alt="Figma Skills" />
              <p>Figma</p>
            </div>
          </div>
        </section>

        <section id="contact" className="grid contact">
          <h2>Get in Touch</h2>
          <form onSubmit={sendEmail}>
            <input type="text" placeholder="Name" name="name" />
            <input type="text" placeholder="Email" name="email" />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Your Message"
              name="message"
            ></textarea>
            <button>Submit</button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Home;
