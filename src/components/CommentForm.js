import { useState } from "react";
import { DATABASE_URL } from "../urls";
import styles from "../styles/CommentForm.module.css";

export default function CommentForm(props) {
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const url = `${DATABASE_URL}/blog/${props.blogID}/comments`;
    const comment = {
      body,
      author,
      blogPost: props.blogID,
    };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(comment),
    };
    fetch(url, requestOptions)
      // .then((response) => console.log(response))
      .catch((err) => console.log(err))
      .finally(() => props.refresh(props.blogID));
    setAuthor("");
    setBody("");
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div>
        <label>Name: </label>
        <input
          type="text"
          placeholder="Name"
          name="author"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <div className={styles.comment}>
        <label>Comment: </label>
        <textarea
          placeholder="Comment away"
          name="body"
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>
      <button className={styles.submit}>Submit</button>
    </form>
  );
}
