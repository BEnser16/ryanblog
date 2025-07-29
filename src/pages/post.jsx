import React from "react";
import { Container, Spinner } from "react-bootstrap";
import ArticleCard from "../components/acticleCard";
import { supabase } from "../supabaseClient";
import { FaFeather } from "react-icons/fa";

const Post = () => {
  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchPosts() {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("is_public", true)
        .order("created_at", { ascending: false });

      if (error) {
        console.error("抓文章失敗：", error);
      } else {
        console.log("抓文章成功：", data);
        setPosts(data);
      }
      setLoading(false);
    }

    fetchPosts();
  }, []);

  return (
    <Container className="mt-5" style={{ minHeight: "90vh" }}>
      <h2>文章分享</h2>
      <Container
        id="acticle-container"
        className="m-2 mt-5 d-flex flex-wrap gap-3"
      >
        {loading ? (
          <div className="w-100 d-flex flex-column align-items-center mt-5">
            <Spinner animation="border" role="status" variant="primary" />
            <FaFeather size={32} className="mt-3 text-primary" />
            <p className="mt-2 text-secondary">文章努力載入中...</p>
          </div>
        ) : posts.length === 0 ? (
          <h3>目前沒有文章</h3>
        ) : (
          posts.map((post) => <ArticleCard key={post.id} {...post} />)
        )}
      </Container>
    </Container>
  );
};

export default Post;
