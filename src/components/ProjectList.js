import { useState } from "react";
import ProjectItem from "./ProjectItem";
import projectArray from "./projectData";
import { Container } from "react-bootstrap";

function ProjectList() {
  // We declare a state variable that is an array called `projects` and a 'setProjects' function to update it.
  const [projects, setProjects] = useState([projectArray]);

  const renderedList = projects.map((project) => {
    return <ProjectItem key={54321} projectArray={project} />;
  });

  return (
    <div className="App">
      <Container className="p-4" key="container">
        {renderedList}
      </Container>
    </div>
  );
}

export default ProjectList;
