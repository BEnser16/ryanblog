import FridgeAppCover from "../static/img/project/icebox.jpg";
import { Image, Container, Row, Table, Col } from "react-bootstrap";

const addFoodImg = "https://i.postimg.cc/SNnZgHyy/2025-06-26-3-52-45.png";
const foodNotify = "https://i.postimg.cc/rmDtK0xL/314019736-145cfacb-18af-4624-bc96-1c4a63f1d8f9.png";
const recommandFoodImg = "https://i.postimg.cc/rwpyV65B/2025-06-26-1-42-11.png";
const analysisImg = "https://i.postimg.cc/NjVtQKsX/2025-06-26-7-45-29.png";



const FridgeAppIntro = () => {
  return (
    <>
      <Image
        src={FridgeAppCover}
        style={{ objectFit: "cover", height: 200, width: "100vw" }}
      />
      <Container className="my-5">
        <Row className="my-3">

        <h2>
          <b>MasterEat</b>
        </h2>
        <p className="m-3">
          MasterEat 是一款基於ReactNative的冰箱管理App , 可以記錄冰箱內的食品 ,
          並且提供食譜推薦功能 , 讓使用者可以依照冰箱內的食材來搜尋適合的食譜。
        </p>
        <p className="m-3" ><a href="https://fridge-cooker-client.vercel.app">Web版網址</a></p>
        </Row>
        <h3>使用技術</h3>
        <hr/>
        <Row id="tech-row" className="my-3">
          <Col md={6}>
          <h5>前端</h5>
          <Table
            striped
            bordered
            hover
            size="sm"
            style={{ maxWidth: 500, margin: 20 }}
          >
            <thead>
              <tr>
                <th>說明</th>
                <th>技術</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>框架</td>
                <td>React Native + Expo </td>
              </tr>
              <tr>
                <td>元件模板</td>
                <td>react-native-paper</td>
              </tr>
              <tr>
                <td>狀態管理</td>
                <td>react-query</td>
              </tr>
              <tr>
                <td>樣式模板</td>
                <td>react-native-paper</td>
              </tr>
              <tr>
                <td>本地儲存</td>
                <td>react-native-async-storage</td>
              </tr>
              <tr>
                <td>圖表套件</td>
                <td>d3</td>
              </tr>
            </tbody>
          </Table>
          </Col>
          <Col md={6}>
          
          
          <h5>後端</h5>
          <Table
            striped
            bordered
            hover
            size="sm"
            style={{ maxWidth: 500, margin: 20 }}
          >
            <thead>
              <tr>
                <th>說明</th>
                <th>技術</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>框架</td>
                <td>SpringBoot</td>
              </tr>
              <tr>
                <td>驗證與授權</td>
                <td>SpringSecurity</td>
              </tr>
              <tr>
                <td>資料庫</td>
                <td>MongoDB</td>
              </tr>
              <tr>
                <td>容器化</td>
                <td>Docker</td>
              </tr>
              <tr>
                <td>Token</td>
                <td>JWT</td>
              </tr>
              <tr>
                <td>API 文件</td>
                <td>Swagger-UI</td>
              </tr>
            </tbody>
          </Table>
          </Col>
        </Row>
        <h3>功能介紹</h3>
        <hr/>
        <Row id="tech-row" className="my-4">
          
          <Row className="align-items-center">
            <Col md={6}>
              <h2 className="fw-bold">食材管理</h2>
              <p>隨心所欲的管理食材 , 新增 / 刪除 / 編輯</p>
            </Col>
            <Col md={6} className="text-center">
              <img
                src={addFoodImg}
                alt="新增食材展示圖"
                style={{ maxWidth: "70%", height: "70%" }}
              />
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col md={6}>
              <img
                src={foodNotify}
                alt="過期通知展示圖"
                style={{ maxWidth: "80%", height: "100%" }}
              />
            </Col>
            <Col md={6} className="text-center">
              <h2 className="fw-bold">過期提醒</h2>
              <p>在食材到期前通知你 , 再也不用怕過期了！</p>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col md={6}>
              <h2 className="fw-bold">AI 聊聊</h2>
              <p>串接 Chat GPT 能夠與AI討論營養菜單 , 當你的隨身營養師</p>
            </Col>
            <Col md={6} className="text-center">
              <img
                src={addFoodImg}
                alt="新增食材展示圖"
                style={{ maxWidth: "50%", height: "70%" }}
              />
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col md={6}>
              <img
                src={recommandFoodImg}
                alt="食譜推薦展示圖"
                style={{ maxWidth: "70%", height: "70%" }}
              />
            </Col>
            <Col md={6} className="text-center">
              <h2 className="fw-bold">食譜推薦</h2>
              <p>根據冰箱內的食材 , 給你最準確的食譜推薦</p>
            </Col>
          </Row>
        </Row>
        <Row className="align-items-center">
          <Col md={6}>
            <h2 className="fw-bold">圖表分析</h2>
            <p>提供各式圖表分析 , 更了解自己的飲食習慣</p>
          </Col>
          <Col md={6} className="text-center">
            <img
              src={analysisImg}
              alt="分析展示圖"
              style={{ maxWidth: "50%", height: "70%" }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FridgeAppIntro;
