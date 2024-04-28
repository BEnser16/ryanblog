import React from 'react'
import { Container  } from 'react-bootstrap';
import ProjectCard from '../components/projectCard';
import coffeeImg from '../static/img/project/coffeeshop.jpg';
import iceboxImg from '../static/img/project/icebox.jpg'

const project = () => {
  const articles = [
    { id: 1, title: 'Duck Coffee', content: 'React + Springboot , 咖啡廳餐飲資訊系統'  , cover:coffeeImg},
    { id: 2, title: 'Fridge Cooker', content: 'ReactNative , 冰箱物品管理 App' , cover:iceboxImg },
    // 可以添加更多文章
  ];

  return (
    <>
      <Container className='mt-5' style={{minHeight:"90vh"}} >
        <h2>開發作品</h2>
        <Container className='m-2 my-5' >
          {articles.map(article => (
            <ProjectCard key={article.id} {...article} />
          ))}
        </Container>

      </Container>
    </>
  )
}

export default project
