import React from 'react'
import { Container , Image  } from 'react-bootstrap';
import myImg from '../static/img/busryan.jpg';





const about = () => {
  return (
    <>
      <Container className='mt-5 d-flex' style={{minHeight:"90vh"}} >
        <div className='col'>
          <Image src={myImg} style={{maxHeight:"500px" , maxWidth:"500px"}} roundedCircle  />

        </div>
        <div  className='col' >

        <h2 className='my-4'>關於作者</h2>
        <p>您好！我是Ryan戴御軒，新北市淡水人，
        目前就讀於高雄科技大學，主修資訊管理。</p>
        <p>擅長JAVA 後端開發</p>
        </div>

      </Container>
    </>
  )
}

export default about
