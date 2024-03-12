// components/ArticleCard.js
import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import computerImg from '../static/img/computer.jpg'

const ArticleCard = ({ title, content, id, cover }) => {
  return (
    <Card className="m-2" style={{ width: "25rem" }}>
      <Card.Img variant="top" src={computerImg} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{content}</Card.Text>
        <Link to={`/article/${id}`} className="btn btn-primary">
          閱讀更多
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ArticleCard;
