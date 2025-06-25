import React from 'react';
import styles from './Portfolio.module.css';

function Portfolio() {
  return (
    <section className={styles.port_con}>
      <h3 className={styles.port_title}>Portfolio</h3>
      <div className={styles.port_list}>
        <div className={styles.port_items}>
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=870&q=80"
            alt="Creative Workspace"
          />
          <p>Creative Workspace</p>
        </div>
        <div className={styles.port_items}>
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=870&q=80"
            alt="Modern UI Design"
          />
          <p>Modern UI Design</p>
        </div>
        <div className={styles.port_items}>
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=870&q=80"
            alt="Coding Session"
          />
          <p>Coding Session</p>
        </div>
        <div className={styles.port_items}>
          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=870&q=80"
            alt="Design Collaboration"
          />
          <p>Design Collaboration</p>
        </div>
        <div className={styles.port_items}>
          <img
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=870&q=80"
            alt="App Prototype"
          />
          <p>App Prototype</p>
        </div>
        <div className={styles.port_items}>
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=870&q=80"
            alt="User Experience"
          />
          <p>User Experience</p>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
