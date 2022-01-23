import CommentForm from "./CommentForm";
import Comments from "./Comments";
import { DATABASE_URL } from "../urls";

export default function BlogPost(props) {
  return (
    <div>
      <p>{props.blog.title}</p>
      <p>{props.blog.author}</p>
      <p>{props.blog.body}</p>
      <p>{props.blog.date}</p>
      <p>{props.blog.tags}</p>
      <a href={`${DATABASE_URL}/blog/${props.blog._id}/comments`}>
        Read the comments
      </a>
      <Comments blogID={props.blog._id} />
      <CommentForm blogID={props.blog._id} />
    </div>
  );
}
