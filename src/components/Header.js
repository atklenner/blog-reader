import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav>
      <h1>The Blog</h1>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}
