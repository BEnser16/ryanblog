import React from 'react'
import { Container  } from 'react-bootstrap';
import ProjectCard from '../components/projectCard';
import coffeeImg from '../static/img/project/coffeeshop.jpg';
import iceboxImg from '../static/img/project/icebox.jpg'

const project = () => {
  const articles = [
    { id: 1, title: 'Duck Coffee', content: '前後端分離 , 咖啡廳餐飲系統'  , cover:coffeeImg},
    { id: 2, title: 'Fridge Cooker', content: '冰箱物品管理 , 雙平台 Mobile App' , cover:iceboxImg },
    // 可以添加更多文章
  ];

  return (
    <>
      <Container className='mt-5' style={{minHeight:"90vh"}} >
        <h2>開發計畫</h2>
        <Container className='m-2 mt-5' >
          {articles.map(article => (
            <ProjectCard key={article.id} {...article} />
          ))}
        </Container>

      </Container>
    </>
  )
}

export default project
