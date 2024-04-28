import React from 'react'
import { Container  } from 'react-bootstrap';
import ArticleCard from '../components/acticleCard';

const post = () => {
  const articles = [
    { id: 1, title: 'JavaScript Ch1 語法與型別', content: '給初學者的 javascript 入門課' , path:'ch1' },
    { id: 2, title: 'Git 常用指令', content: '紀錄常用的 Git 指令與概念' , path:'gitcommand' },
    // 可以添加更多文章
  ];


  return (
    <>
      <Container className='mt-5' style={{minHeight:"90vh"}} >
        <h2>文章分享</h2>
        <Container id='acticle-container' className='m-2 mt-5 d-flex' >

          {articles.map(article => (
            <ArticleCard key={article.id} {...article} />
            ))}
        </Container>
      </Container>
    </>
  )
}

export default post
