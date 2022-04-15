import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogPost from "./routes/BlogPost";
import About from "./routes/About";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog/:id" element={<BlogPost />} />
      <Route path="/*" element={<p>Nothing here for you to see</p>} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
