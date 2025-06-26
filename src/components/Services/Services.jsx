import React from 'react'
import styles from './Services.module.css'
import { FaCode, FaPalette, FaDesktop } from 'react-icons/fa';

function Services() {
  return (
    <div className={styles.services_con}>
      <h3 className={styles.services_title}>My Services</h3>
      <div className={styles.services_list}>

        <div className={styles.services_items}>
          <FaCode />
          <h4>Web Development</h4>
          <p>
            Building responsive, high-performance websites using the latest technologies to deliver seamless user experiences across all devices.
          </p>
        </div>

        <div className={styles.services_items}>
          <FaPalette />
          <h4>Web Design</h4>
          <p>
            Crafting intuitive and visually stunning designs that reflect your brand identity and engage your audience effectively.
          </p>
        </div>

        <div className={styles.services_items}>
          <FaDesktop />
          <h4>Front-end Consulting</h4>
          <p>
            Providing expert advice on front-end architecture and best practices to optimize your website’s usability and performance.
          </p>
        </div>

      </div>
    </div>
  )
}

export default Services
