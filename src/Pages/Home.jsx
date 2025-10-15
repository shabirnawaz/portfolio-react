import React, { useEffect, useRef } from "react";
import img from "../images/my-pic.png";
import about from "../images/about-img.png";
import Typed from "typed.js";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaBriefcase } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { IoIosCode } from "react-icons/io";
import { FaUserFriends } from "react-icons/fa";
import { FaAward } from "react-icons/fa";

function Home() {
  const typedElement = useRef(null);

  // Typed.js + AOS
  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ["Web Developer", "Frontend Developer", "React Developer"],
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 1500,
      loop: true,
    });

    AOS.init({
      duration: 1000,
      once: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  // Progress bar + number animation
  useEffect(() => {
    const bars = document.querySelectorAll(".progress");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target;
            const finalWidth = target.getAttribute("data-width");
            const percentText = target.querySelector(".percent");

            // reset before animating
            target.style.width = "0";

            // animate bar
            setTimeout(() => {
              target.style.width = finalWidth + "%";
            }, 100);

            // animate number
            let count = 0;
            const end = parseInt(finalWidth);
            const step = Math.ceil(end / 50);

            const interval = setInterval(() => {
              count += step;
              if (count >= end) {
                count = end;
                clearInterval(interval);
              }
              percentText.textContent = count + "%";
            }, 95);

            observer.unobserve(target);
          }
        });
      },
      { threshold: 0.3 }
    );

    bars.forEach((bar) => observer.observe(bar));
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="container p-5">
          <div className="row">
            <div data-aos="fade-left" className="col-md-8 mt-2">
              {/* <h3 className="main-headind">Hi, Everyone</h3>
              <h2 className="main-headind">Shabir Afridi</h2>
              <h4>
                I’m a <span ref={typedElement}></span>
              </h4> */}
              <h3 className="main-heading greeting">Hi, Everyone</h3>
              <h2 className="main-heading name">
                Shabir <span className="heading-span"> Afridi</span>
              </h2>
              <h4 className="role">
                I’m a <span ref={typedElement} className="typed"></span>
              </h4>
              <p className="section-text">
                I’m a passionate Frontend Developer with a strong foundation in
                HTML, CSS, JavaScript, and React.js. I love building responsive
                and interactive websites that provide great user experiences. My
                goal is to bring ideas to life in the browser, and I’m always
                eager to learn and grow in this ever-evolving tech world.
              </p>
              <div className="social-icons">
                <a
                  href="https://www.facebook.com/profile.php?id=100028911352786"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-facebook social-icon"></i>
                </a>
                <a
                  href="https://www.linkedin.com/feed/?trk=help_me_menu"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-linkedin social-icon"></i>
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-instagram social-icon"></i>
                </a>
              </div>
            </div>
            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="col-md-4 text-end mt-4"
            >
              <div className="my-img">
                <img
                  src={img}
                  alt="example"
                  className="rounded my-pic mobile-width"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container p-5">
          <div className="row">
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="col-md-4"
            >
              <img
                className="rounded my-pic about-pic mobile-width"
                src={about}
                alt="about"
              />
            </div>
            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="col-md-8"
            >
              <h3
                className="mb-2 aboutme color-white"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                About <span className="heading-span"> Me</span>
              </h3>

              <h4
                className="Frentend-devloper"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                Frentend <span className="heading-span"> Developer</span>
              </h4>
              <p
                className="about-section"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                I'm a passionate Frontend Developer with a strong background in
                creating responsive, interactive, and user-friendly websites. My
                expertise lies in HTML, CSS, JavaScript, and React, which I use
                to build visually appealing and high-performing web
                applications. I enjoy bringing creative ideas to life by
                transforming complex design concepts into smooth, functional,
                and accessible user interfaces. Driven by curiosity and
                continuous learning, I strive to deliver clean code and seamless
                user experiences across all devices.
              </p>

              {/* <button className="readmore">Read more</button> */}
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-9">
              <h3
                className=""
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                My <span className="heading-span"> Skills</span>
              </h3>
              <p
                className=" mb-3"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                I am a passionate Frontend Developer with expertise in building
                modern, responsive, and user-friendly web applications. My
                skills cover frontend technologies, state management, API
                integration, and version control, ensuring clean code and a
                great user experience.
              </p>
            </div>
          </div>
          <div className="card-container">
            <div className="skill-card mobile-width" data-aos="zoom-in-right">
              <h3>Frontend Developer</h3>
              <p>
                I specialize in creating responsive, dynamic user interfaces
                using HTML, CSS, JavaScript, and React.js. My focus is on clean
                code and great UX.
              </p>
            </div>

            <div className="skill-card mobile-width" data-aos="zoom-in-up">
              <h3>JavaScript & React</h3>
              <p>
                Strong understanding of ES6+, functional components, hooks, and
                modern React practices to build scalable single-page
                applications (SPAs).
              </p>
            </div>

            <div className="skill-card mobile-width" data-aos="zoom-in-left">
              <h3>Git & GitHub</h3>
              <p>
                Experienced in using Git for version control and GitHub for team
                collaboration, managing branches, pull requests, and CI/CD
                workflows.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Experience section */}
      <div className="container-fluid">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-8 ">
              <div>
                <h3
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  Experience
                </h3>
                <p
                  className="mb-5"
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  A journey of continuous growth in frontend development —
                  creating modern, responsive, and user-friendly websites. Over
                  the years, I have worked on diverse projects, delivered
                  high-quality solutions, built long-term client trust, and
                  achieved important milestones that reflect both dedication and
                  passion for technology.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 mb-3 ">
              <div className="skill-cards" data-aos="zoom-in-up">
                <div className="d-flex flex-column align-items-center p-3">
                  <FaBriefcase size={35} className="my-2" />
                  <h3 className="fw-bold">
                    1
                    <span className="small-icon">
                      <FaPlus size={18} />
                    </span>
                  </h3>

                  <h5>Experience</h5>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="skill-cards " data-aos="zoom-in-right">
                <div className="d-flex flex-column align-items-center p-3">
                  <IoIosCode size={35} className="my-2" />
                  <h3 className="fw-bold">
                    10
                    <span className="small-icon">
                      <FaPlus size={18} />
                    </span>
                  </h3>

                  <h5>Project Completed</h5>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-3 ">
              <div className="skill-cards" data-aos="zoom-in-left">
                <div className="d-flex flex-column align-items-center p-3">
                  <FaUserFriends size={35} className="my-2" />
                  <h3 className="fw-bold">
                    7
                    <span className="small-icon">
                      <FaPlus size={18} />
                    </span>
                  </h3>

                  <h5>HAPPY Client</h5>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-3 ">
              <div className="skill-cards" data-aos="zoom-in-up">
                <div className="d-flex flex-column align-items-center p-3">
                  <FaAward size={35} className="my-2" />
                  <h3 className="fw-bold">
                    1
                    <span className="small-icon">
                      <FaPlus size={18} />
                    </span>
                  </h3>

                  <h5>AWARD WON</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* skill */}
      <div className="container-fluid">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-6" data-aos="fade-up">
              <div className="skill">
                <span>HTML</span>
                <div className="progress-bar">
                  <div className="progress html" data-width="90">
                    <span className="percent">0%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6" data-aos="fade-down">
              <div className="skill">
                <span>CSS</span>
                <div className="progress-bar">
                  <div className="progress css" data-width="85">
                    <span className="percent">0%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6" data-aos="fade-up">
              <div className="skill">
                <span>Bootstrap</span>
                <div className="progress-bar">
                  <div className="progress bootstrap" data-width="78">
                    <span className="percent">0%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6" data-aos="fade-down">
              <div className="skill">
                <span>Tailwind</span>
                <div className="progress-bar">
                  <div className="progress tailwind" data-width="60">
                    <span className="percent">0%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6" data-aos="fade-up">
              <div className="skill">
                <span>JavaScript</span>
                <div className="progress-bar">
                  <div className="progress js" data-width="60">
                    <span className="percent">0%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6" data-aos="fade-down">
              <div className="skill">
                <span>React</span>
                <div className="progress-bar">
                  <div className="progress react" data-width="40">
                    <span className="percent">0%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
