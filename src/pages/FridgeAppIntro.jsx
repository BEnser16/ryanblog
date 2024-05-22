import React from 'react'
import FridgeAppCover from '../static/img/project/icebox.jpg'
import { Image  , Container} from 'react-bootstrap'

const FridgeAppIntro = () => {
  return (
    <>
    <Image
        src={FridgeAppCover}
        style={{ objectFit: "cover", height: 200, width: "100vw" }}
      />
        <Container className="my-5">
            <h3>
            <b>Fridge Cooker</b>
            </h3>
            <p className="m-3">
            Fridge Cooker 是一款基於ReactNative的冰箱物品管理App , 透過條碼掃描功能 , 可以快速將冰箱內的物品進行管理 , 並且提供食譜推薦功能 , 讓使用者可以依照冰箱內的食材來搜尋適合的料理方式。
            </p>
            <p>目前開發中</p>
            
        </Container>
    </>
  )
}

export default FridgeAppIntro