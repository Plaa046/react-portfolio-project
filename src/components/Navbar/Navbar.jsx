import React, { useState } from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.nav_con}>
          <div className={styles.logo}>
            <a href="#">JD PORT</a>
          </div>
          <div className={styles.menu_icon} onClick={() => setMenuOpen(!menuOpen)}>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
          </div>
          <div className={`${styles.menu_items} ${menuOpen ? styles.open : ""}`}>
            <ul>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
            <div className={styles.button}>
              <a href="#">Hire Me</a>
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;