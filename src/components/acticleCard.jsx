// components/ArticleCard.js
import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ArticleCard = ({ title, description, id, cover }) => {
  return (
    <Link to={`/post-view/${id}`} style={{ textDecoration: 'none' }} >
      <Card
        className="m-2"
        style={{
          width: "25rem",
          boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
          border: "10px solid #fff",
          textDecoration: 'none'
        }}
        key={id}
      >
        <Card.Img
          variant="top"
          style={{ height: "16rem", objectFit: cover }}
          src={cover}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default ArticleCard;
