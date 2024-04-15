import React from 'react';
import { Image, Container, Row, Col } from 'react-bootstrap';
import coverImg from "../static/img/diego.jpg";

const Home = () => {
  return (
    <Container fluid style={{ border: "none", outline: "none", padding: 0, overflow: "hidden" }} >
      <Row>
        <Col>
          <div style={{ position: "relative", width: "100%", height: "95vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Image src={coverImg} style={{  position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }} fluid />
            <div style={{ position: "absolute", backgroundColor: "rgba(0, 0, 0, 0.5)", color: "white", padding: "50px", borderRadius: 20 }}>
              <h2>歡迎光臨</h2>
              <p>這裡是Ryan的部落格，分享一些我的開發經歷與學習心得。 </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
