import React from "react";
import { Container, Image, Row  , Col } from "react-bootstrap";
import cutImg from "../static/img/bryan.jpg";

const about = () => {
  return (
    <>
      <Container className="mt-5" style={{ minHeight: "90vh" }}>
        <Row className="mb-5">
          <div className="col mt-3">
            <Image
              src={cutImg}
              style={{
                maxHeight: "400px",
                maxWidth: "400px",
                objectFit: "cover",
              }}
              roundedCircle
            />
          </div>
          <div className="col">
            <h2 className="my-4">
              <b>戴御軒 RYAN</b>
            </h2>
            <p>
              您好！我是Ryan戴御軒，新北市淡水人，
              目前就讀於高雄科技大學，主修資訊管理。
            </p>
            <p>擅長JAVA 後端開發</p>
            <Row className="mt-5 d-flex flex-column" >
              <h3>技能</h3>
              <p>
                Java , SpringBoot , MySQL , React , Node.js , Express , MongoDB
              </p>

              
            </Row>
          </div>
        </Row>

        <Row className="mt-5">
          <div className="col">
            <h3 className="mb-3" >聯絡資訊</h3>
            <p>
              Email：<a href="mailto:ryan1690@gmail.com" >ryan1690@gmail.com </a> <br />
              Github：<a href="https://github.com/BEnser16">    https://github.com/BEnser16 </a><br />
              Linkedin： <a href="http://linkedin.com/in/ryan-dai-5b9774230"> http://linkedin.com/in/ryan-dai-5b9774230 </a>
            </p>
          </div>
          <div className="col">
            <Col className="mb-3" >
              <h3>興趣</h3>
            </Col>
            <Col>
              <p>
                網球 , 電影 , NBA , Switch
              </p>
            </Col>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default about;
