import { useEffect, useState } from "react";
import { DATABASE_URL } from "../urls";
import { nanoid } from "nanoid";

export default function Comments(props) {
  const [comments, setComments] = useState([{}]);

  // this fetch relies on a previous fetch and the async stuff if messing with it
  // maybe I should make it so this fetch relies on nothing but itself
  // or I make the comments readable on a specific blog page and not one page
  useEffect(() => {
    if (props.blogID) {
      fetch(`${DATABASE_URL}/blog/${props.blogID}/comments`)
        .then((response) => response.json())
        .then((data) =>
          setComments(() => {
            return data;
          })
        );
    }
  }, [props.blogID]);

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
  return <div>{displayComments(comments)}</div>;
}
