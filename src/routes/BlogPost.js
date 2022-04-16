import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DATABASE_URL } from "../urls";
import CommentForm from "../components/CommentForm";
import Comments from "../components/Comments";
import Header from "../components/Header";
import styles from "../styles/BlogPost.module.css";

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
    <>
      <Header />
      <main className={styles.container}>
        <h1 className={styles.post__title}>{blogPost.title}</h1>
        <p className={styles.post__author}>Written by: {blogPost.author}</p>
        <p className={styles.post__date}>{blogPost.date}</p>
        <p className={styles.post__body}>{blogPost.body}</p>
        <p className={styles.post__tags}>{blogPost.tags}</p>
        <hr></hr>
        <Comments blogID={id} comments={comments} />
        <CommentForm blogID={id} />
      </main>
    </>
  );
}
