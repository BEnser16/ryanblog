import React from "react";
import { Container, Row, Table, Image } from "react-bootstrap";
import duckpost from "../static/img/project/duck/duckpost.png";
import duckadminpost from "../static/img/project/duck/duckadminpost.png";
import duckMenu from "../static/img/project/duck/duckMenu.png";
import duckMenuAdmin from "../static/img/project/duck/duckMenuAdmin.png";
import duckBook from "../static/img/project/duck/duckBook.png";
import duckBookAdmin from "../static/img/project/duck/duckBookAdmin.png";
import duckOrder from "../static/img/project/duck/duckOrder.png";
import duckOrderAdmin from "../static/img/project/duck/duckOrderAdmin.png";
import duckTableAdmin from "../static/img/project/duck/duckTableAdmin.png";
import duckRoleAdmin from "../static/img/project/duck/duckRoleAdmin.png";
import duckIcon from "../static/img/project/duck/duck.png";
import duckCofeeShop from "../static/img/project/coffeeshop.jpg";

const DuckCoffeeIntro = () => {
  return (
    <>
      <Image
        src={duckCofeeShop}
        style={{ objectFit: "cover", height: 200, width: "100vw" }}
      />
      <Container className="my-5">
        <Row id="wrap-row">
          <Row id="title-row" className="my-3">
            <h3>
              <Image src={duckIcon} />
              <b>Duck Coffee</b>
            </h3>
            <p className="m-3">
              Duck Coffee 是一款Web平台的餐飲資訊系統 ,
              針對咖啡廳的營運管理提供解決方案 , 提供線上點餐 , 訂單管理 ,
              預約訂位及官網等功能。
            </p>
          </Row>
          <Row id="tech-row" className="my-3">
            <h4>使用技術</h4>
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
                  <td>React</td>
                </tr>
                <tr>
                  <td>頁面導航</td>
                  <td>react-router-dom</td>
                </tr>
                <tr>
                  <td>狀態管理</td>
                  <td>Redux</td>
                </tr>
                <tr>
                  <td>樣式模板</td>
                  <td>react-bootstrap</td>
                </tr>
                <tr>
                  <td>Http</td>
                  <td>axios</td>
                </tr>
                <tr>
                  <td>圖表套件</td>
                  <td>chart.js</td>
                </tr>
              </tbody>
            </Table>
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
                  <td>MySQL</td>
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
          </Row>
          <Row id="struct-row" className="my-3">
            <h4>系統架構</h4>
          </Row>
          <Row id="function-row" className="my-3">
            <h4>功能介紹</h4>
            <Row id="post-row" className="mx-3 mb-3">
              <h5>活動公告欄</h5>
              <Image src={duckpost} fluid className="m-4" />
              <h5>在後台控制發布公告</h5>
              <Image src={duckadminpost} fluid className="m-4" />
            </Row>
            <Row id="menu-row" className="mx-3 mb-3">
              <h5>餐點介紹</h5>
              <Image src={duckMenu} fluid className="m-4" />
              <h5>透過後台新增 , 編輯 , 刪除菜單，隨時調整菜單外觀與價格。</h5>
              <Image src={duckMenuAdmin} fluid className="m-4" />
            </Row>
            <Row id="menu-row" className="mx-3 mb-3">
              <h5>線上訂位</h5>
              <Image src={duckBook} fluid className="m-4" />
              <h5>在後台管理用戶的訂位資料</h5>
              <Image src={duckBookAdmin} fluid className="m-4" />
            </Row>
            <Row id="menu-row" className="mx-3 mb-3">
              <h5>線上點餐</h5>
              <Image src={duckOrder} fluid className="m-4" />
              <h5>從後台管理用戶訂餐</h5>
              <Image src={duckOrderAdmin} fluid className="m-4" />
            </Row>
            <Row id="menu-row" className="mx-3  mb-3 ">
              <h5>桌位管理</h5>
              <p>可以透過產生的 Qrcode 提供客人掃描進行線上點餐</p>
              <Image src={duckTableAdmin} fluid className="m-4" />
              <h5>權限管理</h5>
              <Image src={duckRoleAdmin} fluid className="m-4" />
            </Row>
          </Row>
        </Row>
      </Container>
    </>
  );
};

export default DuckCoffeeIntro;
