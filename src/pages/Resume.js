import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import resumePDF from "../assets/Resume-Jeremy-Fulbright.pdf";

export default function Resume() {
  return (
    <div>
      <h1>Full Stack Resume</h1>
      <p>
        <a href={resumePDF} className="me-4 text-reset">
          Jeremy Fulbright Resume (PDF)
        </a>
      </p>
      <p>
        I am a Full Stack Developer focused on the MERN stack (MongoDB, Express,
        React, and Node.js). My goal is to create high-quality, functional web
        applications that deliver exceptional user experiences. I have hands-on
        experience and skillsets in the following areas:
      </p>
      <ul className="about">
        <li>
          Front-end Development: Knowledge of HTML, CSS, JavaScript, and React
          for building the user interface.
        </li>
        <li>
          Back-end Development: Experience with Node.js, Express, and MongoDB
          for building and integrating server-side components.
        </li>
        <li>
          Database Management: Knowledge of MongoDB, including CRUD operations,
          data modeling, and data aggregation.
        </li>
        <li>
          REST API Development: Experience with developing and integrating REST
          APIs for communication between the front-end and back-end.
        </li>
        <li>
          Server Deployment: Knowledge of deploying servers and applications to
          platforms such as Heroku and AWS.
        </li>
        <li>
          Git and Version Control: Expert at code version control tools such as
          Git and GitHub for efficient and scalable collaboration.
        </li>
        <li>
          Testing and Debugging: Experience with Jest for testing and debugging
          applications.
        </li>
      </ul>
    </div>
  );
}
