import React, { useEffect , useState } from "react";
import ReactMarkdown from "react-markdown";
import { Container, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BaseUrl } from "../service/BaseUrl";

const PostView = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 假設你的 API URL 是 `/api/posts/:id`
    axios
      .get(`${BaseUrl}/post-view/${id}`)
      .then((res) => {
        console.log(res.data);
        setPost(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching post:", error);
        setLoading(false);
      });
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
          <ReactMarkdown children={post.content} />
        </div>
      </Container>
    </>
  );
};

export default PostView;
