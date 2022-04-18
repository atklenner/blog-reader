import { useEffect, useState } from "react";
import { DATABASE_URL } from "./urls.js";
import Header from "./components/Header";
import { Link } from "react-router-dom";
import styles from "./styles/App.module.css";
import Footer from "./components/Footer.js";

function App() {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    async function getBlogPosts() {
      try {
        const res = await fetch(DATABASE_URL + "/blog");
        const data = await res.json();
        setBlogPosts(data);
      } catch (error) {
        console.error(error);
      }
    }
    getBlogPosts();
  }, []);

  return (
    <>
      <Header />
      {blogPosts && (
        <main className={styles.container}>
          {blogPosts.map((blog) => {
            return (
              <article key={blog._id} className={styles.blogPost}>
                <Link to={`/blog/${blog._id}`} className={styles.postLink}>
                  {blog.title}
                </Link>
                <p>{blog.body.slice(0, 200)}</p>
              </article>
            );
          })}
        </main>
      )}
      <Footer />
    </>
  );
}

export default App;
