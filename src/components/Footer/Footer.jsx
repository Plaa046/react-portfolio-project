import React from 'react';
import styles from './Footer.module.css';
import { FaFacebook, FaInstagram } from 'react-icons/fa6';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>
          © 2025 Supattra Songsawangwong. All rights reserved.
        </p>
        <div className={styles.social}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            <FaFacebook />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
