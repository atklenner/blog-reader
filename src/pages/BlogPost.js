import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DATABASE_URL } from "../urls";
import CommentForm from "../components/CommentForm";
import Comments from "../components/Comments";
import styles from "../styles/BlogPost.module.css";
import ReactMarkdown from "react-markdown";

export default function BlogPost() {
  const [blogPost, setBlogPost] = useState([]);
  const [comments, setComments] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    getBlogPost(id);
    getComments(id);
  }, [id]);

  async function getBlogPost(id) {
    try {
      const res = await fetch(`${DATABASE_URL}/blog/${id}`);
      const data = await res.json();
      setBlogPost(data);
    } catch (error) {
      console.error(error);
    }
  }

  async function getComments(id) {
    try {
      const res = await fetch(`${DATABASE_URL}/blog/${id}/comments`);
      const data = await res.json();
      setComments(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <main className={styles.container}>
        <article>
          <h1 className={styles.post__title}>{blogPost.title}</h1>
          <p className={styles.post__author}>Written by: {blogPost.author}</p>
          <p className={styles.post__date}>
            {new Date(blogPost.date).toLocaleString()}
          </p>
          <ReactMarkdown>{blogPost.body}</ReactMarkdown>
          <p className={styles.post__tags}>{blogPost.tags}</p>
        </article>
        <hr></hr>
        <Comments blogID={id} comments={comments} />
        <CommentForm blogID={id} refresh={getComments} />
      </main>
    </>
  );
}
