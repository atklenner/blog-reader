import styles from "../styles/Comments.module.css";

export default function Comments(props) {
  function displayComments(commentsArray) {
    if (commentsArray) {
      return commentsArray.map((comment) => {
        return (
          <div key={comment._id} className={styles.comment__container}>
            <p className={styles.comment__body}>{comment.body}</p>
            <p className={styles.comment__author}>{comment.author}</p>
            <p className={styles.comment__date}>
              {/* {comment.date} */}
              {new Date(comment.date).toLocaleString()}
            </p>
          </div>
        );
      });
    } else return "";
  }
  return <div>{displayComments(props.comments)}</div>;
}
