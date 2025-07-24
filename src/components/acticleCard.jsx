import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ArticleCard = ({ title, description, id, cover, created_at }) => {
  const formattedDate = new Date(created_at).toLocaleDateString('zh-TW', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });

  return (
    <Link to={`/post-view/${id}`} style={{ textDecoration: 'none' }} >
      <Card
        className="m-2"
        style={{
          width: "20rem",
          boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
          border: "10px solid #fff",
          textDecoration: 'none'
        }}
        key={id}
      >
        <Card.Img
          variant="top"
          style={{ height: "10rem", objectFit: cover }}
          src={cover}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text style={{ fontSize: '0.8rem', color: '#555' }}>
            發布日期：{formattedDate}
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default ArticleCard;
