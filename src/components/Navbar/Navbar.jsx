import React, { useState } from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  // 1. สร้าง state เพื่อเก็บสถานะการเปิด/ปิดเมนู
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.nav_con}>
          <div className={styles.logo}>
            <a href="#">JD PORT</a>
          </div>

          {/* 2. สร้างปุ่ม Hamburger และให้แสดงผลเฉพาะในมือถือ (กำหนดใน CSS) */}
          <div className={styles.menu_icon} onClick={() => setMenuOpen(!menuOpen)}>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
          </div>

          {/* 3. เพิ่ม className 'open' เมื่อ state menuOpen เป็น true */}
          <div className={`${styles.menu_items} ${menuOpen ? styles.open : ""}`}>
            <ul>
              <li>
                {/* แก้ไขจาก Skills เป็น Services ตามรูปภาพ */}
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