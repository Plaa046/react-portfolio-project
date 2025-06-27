import React from 'react'
import styles from './Contact.module.css'
import { FaPhone, FaEnvelope } from 'react-icons/fa6'

function Contact() {
  return (
    <div className={styles.contact_wrapper}>
      <div className={styles.contact_con}>
        <div className={styles.contact_info}>
          <h3>Get in touch</h3>
          <p className={styles.contact_desc}>
            If you have any questions or just want to say hello,
            feel free to reach out using the form or contact details below.
          </p>
          <p>
            123 Main Street <br />
            Bangkok, Thailand
          </p>
          <p><FaPhone /> (+66) 99 352 9334</p>
          <p><FaEnvelope /> supattra14.song@gmail.com</p>
        </div>

        <div className={styles.contact_from}>
          <form
            action="https://formspree.io/f/YOUR_FORM_ID" // 👉 เปลี่ยน YOUR_FORM_ID เป็นของคุณ
            method="POST"
          >
            <div className={styles.input_group}>
              <div>
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="e.g. Supattra"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="e.g. Song"
                  required
                />
              </div>
            </div>

            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="e.g. supattra14.song@gmail.com"
              required
            />

            <label htmlFor="message">Your Message</label>
            <textarea
              name="message"
              id="message"
              rows="6"
              placeholder="Type your message here..."
              required
            />

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
