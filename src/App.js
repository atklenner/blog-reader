import "./App.css";
import { useEffect, useState } from "react";
import { DATABASE_URL } from "./urls.js";
import { nanoid } from "nanoid";
import Header from "./components/Header";
import { Link } from "react-router-dom";

function App() {
  const [blogPosts, setBlogPosts] = useState([{}]);

  useEffect(() => {
    fetch(DATABASE_URL)
      .then((response) => response.json())
      .then((data) =>
        setBlogPosts(() => {
          return data;
        })
      );
  }, []);

  function displayBlogs(blogArray) {
    if (blogArray) {
      return blogArray.map((blog) => {
        return (
          <h2 key={nanoid()}>
            <Link to={`/blog/${blog._id}`}>{blog.title}</Link>
            <hr></hr>
          </h2>
        );
      });
    } else return "";
  }

  return (
    <div>
      <Header />
      {displayBlogs(blogPosts)}
    </div>
  );
}

export default App;
