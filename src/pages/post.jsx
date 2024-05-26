import React from 'react'
import { Container  } from 'react-bootstrap';
import ArticleCard from '../components/acticleCard';
import axios from 'axios';
import { BaseUrl } from '../service/BaseUrl';

const Post = () => {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    axios.get(`${BaseUrl}/posts`).then((res) => {
      console.log('get posts response', res);
      setPosts(res.data);
    }).catch((error) => {
      console.log('error', error);
    });
  }, []);


  return (
    <>
      <Container className='mt-5' style={{minHeight:"90vh"}} >
        <h2>文章分享</h2>
        <Container id='acticle-container' className='m-2 mt-5 d-flex' >
          {posts.length > 0 && posts.map(post => (
            <ArticleCard key={post.id} {...post} />
          ))}
          {posts.length === 0 && <h3>目前沒有文章</h3>}
        </Container>
      </Container>
    </>
  )
}

export default Post
