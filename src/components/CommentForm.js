export default function CommentForm(props) {
  // you have to do a lot more for forms in React
  return (
    <form action={`/blog/${props.blogID}/comments`} method="POST">
      <label>Name: </label>
      <input type="text" placeholder="Name" name="author" id="author" />
      <label>Comment: </label>
      <textarea placeholder="Comment away" name="body" id="body"></textarea>
      <button>Submit</button>
    </form>
  );
}
