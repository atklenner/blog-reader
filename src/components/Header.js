import { Link } from "react-router-dom";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>The Blog</h1>
        <nav className={styles.nav}>
          <ul className={styles.nav__list}>
            <li className={styles.nav__item}>
              <Link to="/" className={styles.nav__link}>
                Home
              </Link>
            </li>
            <li className={styles.nav__item}>
              <Link to="/about" className={styles.nav__link}>
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
