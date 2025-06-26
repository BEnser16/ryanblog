import React from "react";
import { Container, Image, Row, Col, Card, Badge } from "react-bootstrap";
import cutImg from "../static/img/bryan.jpg";

const About = () => {
  const skills = [
    "Java",
    "SpringBoot",
    "MySQL",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
  ];

  return (
    <div style={{ backgroundColor: "#eaeaea" , paddingTop: "60px" }}>
      <Container style={{ minHeight: "90vh" }}>
        {/* Profile Card */}
        <Card className="p-4 shadow-sm">
          <Row className="align-items-center">
            <Col md={4} className="text-center mb-4 mb-md-0">
              <Image
                src={cutImg}
                roundedCircle
                fluid
                className="shadow"
                style={{
                  maxWidth: "250px",
                  objectFit: "cover",
                  transition: "transform 0.3s ease-in-out",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
            </Col>
            <Col md={8}>
              <h2 className="fw-bold mb-3">戴御軒 Ryan</h2>
              <p>
                您好！我是 Ryan
                戴御軒，新北市淡水人，畢業於高雄科技大學資訊管理系。
                熱衷於開發有趣的產品，並持續精進實務開發經驗。
              </p>
              <p>
                專長領域：<strong>Java 後端開發</strong>，熟悉 Spring Boot
                與資料庫操作。
              </p>
              <h5 className="mt-4 mb-2">技能技術</h5>
              <div>
                {skills.map((skill, idx) => (
                  <Badge key={idx} bg="primary" className="me-2 mb-2">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Col>
          </Row>
        </Card>

        {/* Contact & Interests */}
        <Row className="mt-5">
          <Col md={6}>
            <Card className="p-4 shadow-sm h-100">
              <h4 className="mb-3">聯絡資訊</h4>
              <p>
                📧 Email：{" "}
                <a href="mailto:ryan1690@gmail.com">ryandai1690@gmail.com</a>
                <br />
                💻 Github： <a href="https://github.com/BEnser16">BEnser16</a>
                <br />
                🔗 Linkedin：{" "}
                <a href="http://linkedin.com/in/ryan-dai-5b9774230">
                  ryan-dai-5b9774230
                </a>
              </p>
            </Card>
          </Col>
          <Col md={6} className="mt-4 mt-md-0">
            <Card className="p-4 shadow-sm h-100">
              <h4 className="mb-3">興趣嗜好</h4>
              <ul className="mb-0">
                <li>⛰️ 登山</li>
                <li>🏀 NBA</li>
                <li>🎮 Switch</li>
              </ul>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
