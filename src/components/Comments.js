import styles from "../styles/Comments.module.css";

export default function Comments({ comments }) {
  return (
    <div>
      {comments.map((comment) => {
        return (
          <div key={comment._id} className={styles.comment__container}>
            <p className={styles.comment__body}>{comment.body}</p>
            <p className={styles.comment__author}>{comment.author}</p>
            <p className={styles.comment__date}>
              {new Date(comment.date).toLocaleString()}
            </p>
          </div>
        );
      })}
    </div>
  );
}
