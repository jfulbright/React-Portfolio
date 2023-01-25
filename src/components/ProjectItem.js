import React from "react";
import { Container, Card, Col, Row, Button } from "react-bootstrap";

const ProjectItem = ({ projectArray }) => {
  return (
    <div>
    {Array.from(projectArray).map((project, idx) => (
      <Col>
        <Card>
          <Card.Img variant="top" src={project.Src} />
          <Card.Body>
            <Card.Title>{project.Title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Card Subtitle
            </Card.Subtitle>
            <Card.Text>{project.Desc}</Card.Text>

            <Card.Link href={project.DeployedURL}>Deployed App</Card.Link>

            <Card.Link href={project.GitHubRepo}> GitHub Repo</Card.Link>
          </Card.Body>
        </Card>
      </Col>
      
    ))}
    </div>
  );
};

export default ProjectItem;
