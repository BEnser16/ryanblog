import { useEffect , useState } from "react";
import ReactMarkdown from "react-markdown";
import { Container, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { supabase } from "../supabaseClient";

const PostView = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("id", id)
        .single(); // 抓單一筆

      if (error) {
        console.error("抓文章失敗：", error);
      } else {
        console.log("抓到文章：", data);
        setPost(data);
      }

      setLoading(false);
    }

    fetchPost();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <Image
        src={post.cover}
        style={{ objectFit: "cover", height: 200, width: "100vw" }}
      />
      <Container fluid className="d-flex justify-content-center">
        <div className="col-6 my-5">
          <h1>{post.title}</h1>
          <ReactMarkdown children={post.content} />
        </div>
      </Container>
    </>
  );
};

export default PostView;
