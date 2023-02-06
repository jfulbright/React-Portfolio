import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Col, Row } from "react-bootstrap";

const ProjectItem = ({ projectArray }) => {
  return (
    <Row xs={1} md={2} className="g-4">
      {Array.from(projectArray).map((project, idx) => (
        <Col>
          <Card key={project.id} border="dark" bg="dark" text="white">
            <Card.Img variant="top" src={project.Src} />
            <Card.Body>
              <Card.Title><h2>{project.Title}</h2></Card.Title>

              <Card.Text>{project.Desc}</Card.Text>

              <Card.Link href={project.DeployedURL}>Deployed App</Card.Link>

              <Card.Link href={project.GitHubRepo}>GitHub Repo</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ProjectItem;
