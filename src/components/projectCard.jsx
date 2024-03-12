import React from "react";
import { Card } from "react-bootstrap";


const ProjectCard = ({ title, content, id, cover }) => {
  return (
    <Card className="m-3" key={id} >
      <Card.Img variant="top" src={cover} style={{maxHeight:"18rem", objectFit:"cover" }} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{content}</Card.Text>
        
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
