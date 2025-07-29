import React from 'react'
import { Container  } from 'react-bootstrap';
import ProjectCard from '../components/projectCard';
import coffeeImg from '../static/img/project/coffeeshop.jpg';
import iceboxImg from '../static/img/project/icebox.jpg';
import zooImg from '../static/img/project/zoo.jpg';

const project = () => {
  const articles = [
    { id: 1, title: 'Duck Coffee', content: 'React + Springboot , Web 餐飲資訊系統'  , cover:coffeeImg , link:'/ryanblog/project/duckcoffee'},
    { id: 2, title: 'MasterEat', content: 'ReactNative , 冰箱管理跨平台 App' , cover:iceboxImg , link:'/ryanblog/project/mastereat'},
    { id: 3, title: 'ZooGuide Linebot', content: 'Linebot + GCP , 兒童動物園導覽聊天機器人' , cover:zooImg , link:'/ryanblog/project/zoolinebot'},
    // 可以添加更多文章
  ];

  return (
    <>
      <Container className='mt-5' style={{minHeight:"90vh"}} >
        <h2>開發作品</h2>
        <Container className='m-2 my-5' >
          {articles.map(article => (
            <a href={article.link} style={{textDecoration:"none"}} >
              <ProjectCard key={article.id} {...article} />
            </a>
          ))}
        </Container>

      </Container>
    </>
  )
}

export default project
