import { Container, Row, Col, Image } from "react-bootstrap";
import coverImg from "../static/img/diego.jpg";
import cutImg from "../static/img/bryan.jpg";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";

const sectionStyle = {
  backgroundColor: "#fff",
  padding: "2rem",
  maxWidth: "80vw",
  borderRadius: "16px",
  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
  marginBottom: "2rem",
};

const sectionBottomStyle = {
  backgroundColor: "#fff",
  padding: "2rem",
  maxWidth: "80vw",
  borderRadius: "16px",
  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
};

const Home = () => {
  return (
    <>
      <div style={{ backgroundColor: "#f8f9fa", paddingBottom: "4rem" }}>
        {/* Hero Section */}
        <div
          style={{
            position: "relative",
            height: "40vh",
            backgroundImage: `url(${coverImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            textAlign: "center",
          }}
        ></div>

        {/* About Section (floating style in hero) */}
        <div
          style={{
            position: "relative",
            marginTop: "-100px",
            zIndex: 2,
          }}
        >
          <Container id="about" style={sectionStyle}>
            <Row>
              <Col md={4} className="text-center">
                <Image
                  src={cutImg}
                  roundedCircle
                  style={{ width: 200, height: 200, objectFit: "cover" }}
                />
              </Col>
              <Col md={8}>
                <h2>關於我</h2>
                <p>
                  您好！我是 Ryan 戴御軒，擅長 Java 後端與 React
                  前端開發，熱衷於開發有趣實用的產品，持續精進我的開發經驗。
                </p>
                <div className="d-flex gap-3 mt-3">
                  <a
                    href="https://github.com/BEnser16"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "black" }}
                  >
                    <FaGithub size={28} />
                  </a>
                  <a
                    href="mailto:ryandai1690@gmail.com"
                    style={{ color: "black" }}
                  >
                    <FaEnvelope size={28} />
                  </a>
                  <a
                    href="http://linkedin.com/in/ryan-dai-5b9774230"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "black" }}
                  >
                    <FaLinkedin size={28} />
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        {/* Education Section */}
        <Container id="education" style={sectionStyle}>
          <h2 className="mb-4">學歷</h2>
          <hr />
          <Row>
            <Col>
              <h5>國立高雄科技大學 - 資訊管理系</h5>
              <p>2021 - 2024</p>
              <p>
                主修軟體工程，專題研究區塊鏈-聯盟鏈 <br />
                曾擔任學生會幹部
              </p>
            </Col>
          </Row>
        </Container>

        {/* Experience Section */}
        <Container id="experience" style={sectionBottomStyle}>
          <h2 className="mb-4">工作經驗</h2>
          <hr />
          <Row className="mb-3">
            <Col>
              <h5>Software Engineer - 資訊公司</h5>
              <p>2024/7 - 2024/10</p>
              <p>
                專案系統維護與功能擴充，使用Spring / JSP / Hibernate / SQL
                Server等技術。
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h5>Crawler Intern - 軟體公司</h5>
              <p>2023/7 - 2023/8 暑期實習</p>
              <p>
                針對收集電商商品資料的爬蟲進行測試與維護，監控爬蟲資料收集量的數據變化，並撰寫或修改爬蟲JavaScript腳本解決運作問題。
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Home;
