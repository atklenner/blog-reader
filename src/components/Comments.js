import { nanoid } from "nanoid";

export default function Comments(props) {
  function displayComments(commentsArray) {
    if (commentsArray) {
      return commentsArray.map((comment) => {
        return (
          <div key={nanoid()}>
            <p>{comment.author}</p>
            <p>{comment.body}</p>
            <p>{comment.date}</p>
          </div>
        );
      });
    } else return "";
  }
  return <div>{displayComments(props.comments)}</div>;
}
