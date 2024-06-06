import React from "react";
import { Container } from "react-bootstrap";
import ArticleCard from "../components/acticleCard";
import axios from "axios";
import { BaseUrl } from "../service/BaseUrl";

const Post = () => {
  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    axios
      .get(`${BaseUrl}/posts`)
      .then((res) => {
        console.log("get posts response", res);
        setPosts(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("error", error);
        setLoading(false); // 確保在發生錯誤時也能停止加載狀態
      });
  }, []);

  return (
    <>
      <Container className="mt-5" style={{ minHeight: "90vh" }}>
        <h2>文章分享</h2>
        <Container id="acticle-container" className="m-2 mt-5 d-flex">
          {loading ? (
            <h3>Loading...</h3>
          ) : posts.length === 0 || !posts.some((post) => post.cansee === 1) ? (
            <h3>目前沒有文章</h3>
          ) : (
            posts
              .filter((post) => post.cansee === 1)
              .map((post) => <ArticleCard key={post.id} {...post} />)
          )}
        </Container>
      </Container>
    </>
  );
};

export default Post;
