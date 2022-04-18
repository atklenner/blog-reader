import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "../styles/About.module.css";

export default function About() {
  return (
    <>
      <Header />
      <main>
        <div className={styles.container}>
          <h1>About Me</h1>
          <p>
            Here is my attempt at a blog. This website accesses a REST API that
            accesses a database that holds all the blog posts.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
