import Header from "./components/Header";
import styles from "./styles/App.module.css";
import Footer from "./components/Footer.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogPost from "./pages/BlogPost";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.container}>
        <Header />
        <Routes className={styles.routes}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/*" element={<p>Nothing here for you to see</p>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
