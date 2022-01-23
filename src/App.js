import "./App.css";
import { useEffect, useState } from "react";
import { DATABASE_URL } from "./urls.js";
import BlogPost from "./components/BlogPost";
import { nanoid } from "nanoid";

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
        return <BlogPost blog={blog} key={nanoid()} />;
      });
    } else return "";
  }

  return <div className="App">{displayBlogs(blogPosts)}</div>;
}

export default App;
