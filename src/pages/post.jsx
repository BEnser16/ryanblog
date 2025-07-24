import React from "react";
import { Container } from "react-bootstrap";
import ArticleCard from "../components/acticleCard";
import { supabase } from "../supabaseClient";

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
      <Container id="acticle-container" className="m-2 mt-5 d-flex flex-wrap gap-3">
        {loading ? (
          <h3>Loading...</h3>
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
