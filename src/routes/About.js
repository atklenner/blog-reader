import Header from "../components/Header";

export default function About() {
  return (
    <div>
      <Header></Header>
      <h2>About Me</h2>
      <p>
        Here is my attempt at a blog. This website accesses a REST API that
        accesses a database that holds all the blog posts.
      </p>
    </div>
  );
}