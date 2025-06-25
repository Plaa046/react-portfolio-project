import React from 'react';
import styles from './Testimonials.module.css';

function Testimonials() {
  return (
    <section className={styles.testi_con}>
      <h3 className={styles.testi_title}>What Clients Say</h3>
      <div className={styles.testi_list}>
        <div className={styles.testi_items}>
          <p>
            “Working with Supattra was an absolute pleasure. The frontend came out stunning,
            and our users love the new interface!”
          </p>
          <img
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=500&q=80"
            alt="Alice Kim"
          />
          <h4>Alice Kim</h4>
          <p className={styles.bio}>Product Manager, StartupX</p>
        </div>

        <div className={styles.testi_items}>
          <p>
            “Very talented developer with a great eye for design. Delivered the project before deadline with outstanding quality.”
          </p>
          <img
            src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=500&q=80"
            alt="Marco Leung"
          />
          <h4>Marco Leung</h4>
          <p className={styles.bio}>CTO, FinTech Co.</p>
        </div>

        <div className={styles.testi_items}>
          <p>
            “Supattra understood exactly what we needed. The UI is now sleek, modern, and user-friendly. Highly recommended!”
          </p>
          <img
            src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=500&q=80"
            alt="Sofia Ramirez"
          />
          <h4>Sofia Ramirez</h4>
          <p className={styles.bio}>UX Lead, GlobalApp</p>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
