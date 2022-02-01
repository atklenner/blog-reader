import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DATABASE_URL } from "../urls";
import CommentForm from "../components/CommentForm";
import Comments from "../components/Comments";
import Header from "../components/Header";

export default function BlogPost() {
  const [blogPost, setBlogPost] = useState([{}]);
  const [comments, setComments] = useState([{}]);
  let { id } = useParams();

  useEffect(() => {
    if (id) {
      fetch(`${DATABASE_URL}/blog/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setBlogPost(() => {
            return data;
          });
        });
      fetch(`${DATABASE_URL}/blog/${id}/comments`)
        .then((response) => response.json())
        .then((data) =>
          setComments(() => {
            return data;
          })
        );
    }
  }, [id]);

  return (
    <div>
      <Header />
      <h2>{blogPost.title}</h2>
      <p>{blogPost.author}</p>
      <p>{blogPost.body}</p>
      <p>{blogPost.date}</p>
      <p>{blogPost.tags}</p>
      <Comments blogID={id} comments={comments} />
      <CommentForm blogID={id} />
    </div>
  );
}
