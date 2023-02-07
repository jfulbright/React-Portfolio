import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  // solid,
  // regular,
  brands,
  // icon,
} from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

export default function Header() {
  return (
    <>
      {/* Footer */}
      <footer className="text-center text-lg-start bg-light text-muted">
        {/* Section: Social media */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          {/* Left */}
          <div className="me-5 d-none d-lg-block">
            <span>Connected with me:</span>
          </div>
          {/* Left */}
          {/* Right */}
          <div>
            <a href="#mailto:jfulbright@gmail.com" className="me-4 text-reset">
              <FontAwesomeIcon icon={brands("google")} /> jfulbright@gmail.com
            </a>

            <a
              href="https://www.linkedin.com/in/jeremyfulbright/"
              className="me-4 text-reset"
            >
              <FontAwesomeIcon icon={brands("linkedin")} />{" "}
              LinkedIn.com/jeremyfulbright
            </a>
            <a href="https://github.com/jfulbright" className="me-4 text-reset">
              <FontAwesomeIcon icon={brands("github")} /> github.com/jfulbright
            </a>
          </div>
          {/* Right */}
        </section>
        {/* Section: Social media */}
        {/* Section: Links  */}
        <section className="">
          <div className="container text-center text-md-start mt-5">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* Content */}
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3" />
                  About
                </h6>
                <p>
                  Full Stack Developer focused on the MERN stack (MongoDB,
                  Express, React, and Node.js)
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Front-End:</h6>
                <p>HTML, CSS, Bootstrap</p>
                <p>JavaScript, jQuery</p>
                <p>ReactJS, State</p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Back-end</h6>
                <p>Node.js, Express.js</p>
                <p>MySQL, MongoDB, GraphQL</p>
                <p>ORM, MVC, OOP</p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3" /> Denver, CO 80206, US
                </p>
                <p>
                  <i className="fas fa-envelope me-3" />
                  jfulbright@gmail.com
                </p>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </section>
        {/* Section: Links  */}
        {/* Copyright */}
        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2022 Copyright:
          <a className="text-reset fw-bold" href="http://www.insertlink.com">
            JeremyFulbright.com
          </a>
        </div>
        {/* Copyright */}
      </footer>
      {/* Footer */}
    </>
  );
}
