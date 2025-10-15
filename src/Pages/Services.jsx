import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaLaptopCode,
  FaPaintBrush,
  FaServer,
  FaMobileAlt,
  FaDatabase,
  FaAward,
} from "react-icons/fa";

function Services() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // once:true means animation happens once
  }, []);

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-10 mb-3" data-aos="fade-right">
          <h2 className="mb-3">Services</h2>
          <p className="mb-3">
            I offer a wide range of professional web development and design
            services tailored to meet the needs of modern businesses. From
            building responsive and high-performing websites to creating
            engaging user interfaces, my goal is to help brands establish a
            strong online presence. I focus on delivering clean, efficient, and
            scalable solutions that not only look great but also provide an
            exceptional user experience across all devices. Whether it’s
            creating dynamic web applications, integrating APIs, optimizing
            performance, or maintaining your digital assets, I am committed to
            helping you achieve your business goals with quality and
            reliability.
          </p>
        </div>
      </div>

      <div className="row g-4">
        {/* Card 1 */}
        <div className="col-md-4" data-aos="zoom-in">
          <div className="skill-card text-center p-4 shadow-sm h-100">
            <FaLaptopCode size={40} className="mb-3 text-primary" />
            <h4>Web Development</h4>
            <p>
              Responsive websites built with HTML, CSS, JavaScript & React.js
              for optimal performance.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4" data-aos="zoom-in" data-aos-delay="100">
          <div className="skill-card text-center p-4 shadow-sm h-100">
            <FaPaintBrush size={40} className="mb-3 text-success" />
            <h4>UI/UX Design</h4>
            <p>
              Creative, clean, and user-friendly designs to improve user
              engagement and accessibility.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4" data-aos="zoom-in" data-aos-delay="200">
          <div className="skill-card text-center p-4 shadow-sm h-100">
            <FaServer size={40} className="mb-3 text-danger" />
            <h4>API Integration</h4>
            <p>
              Seamless integration of APIs to add dynamic functionality to web
              applications.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="col-md-4" data-aos="zoom-in" data-aos-delay="300">
          <div className="skill-card text-center p-4 shadow-sm h-100">
            <FaMobileAlt size={40} className="mb-3 text-info" />
            <h4>Mobile Optimization</h4>
            <p>
              Ensuring websites and apps work flawlessly across all mobile
              devices.
            </p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="col-md-4" data-aos="zoom-in" data-aos-delay="400">
          <div className="skill-card text-center p-4 shadow-sm h-100">
            <FaDatabase size={40} className="mb-3 text-warning" />
            <h4>Database Integration</h4>
            <p>
              Connecting websites to databases for efficient data management and
              storage.
            </p>
          </div>
        </div>

        {/* Card 6 */}
        <div className="col-md-4" data-aos="zoom-in" data-aos-delay="500">
          <div className="skill-card text-center p-4 shadow-sm h-100">
            <FaAward size={40} className="mb-3 text-secondary" />
            <h4>Performance & Awards</h4>
            <p>
              High performance coding and delivering award-winning projects with
              quality standards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
