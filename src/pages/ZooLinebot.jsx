import React from 'react'
import { Image , Container , Row } from 'react-bootstrap'
import zooImg from '../static/img/project/zoo.jpg'

const ZooLinebot = () => {
  return (
    <>
    <Image
        src={zooImg}
        style={{ objectFit: "cover", height: 200, width: "100vw" }}
      />
        <Container className="my-5">
            <h3>
            <b>ZooGuide Linbot</b>
            </h3>
            <p className="m-3">
            一款為兒童設計的動物園導覽聊天機器人 , 透過 Line 聊天室介面 , 為兒童提供動物介紹 , 語音導覽 , 路標翻譯等服務 , 主要基於 Google Cloud Platform 開發。
            </p>
            <Row className='mt-3'>
                <h5>
                使用技術
                </h5>
                <p style={{margin:"20px"}}>
                Node.js <br/>
                Express <br/>
                axios <br/>
                canvas <br/>
                ffmpeg <br/>
                linebot
                </p>
            </Row>
            <Row>

                <h5>
                雲端服務
                </h5>
                <p style={{margin:"20px"}}>
                Compute Engine API <br/>
                Cloud Vision API <br/>
                Cloud Storage API <br/>
                Cloud Text-to-Speech API <br/>
                Cloud Speech-to-Text API <br/>
                Knowledge Graph Search API
                </p>
            </Row>
            <h5>介紹簡報</h5>
            <a href="https://zooguidelinebot.my.canva.site/">
                ZooGuide Linebot - Canva site</a>
        </Container>
    </>
  )
}

export default ZooLinebot