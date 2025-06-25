import React from 'react'
import styles from './Contact.module.css'
import {FaPhone, FaEnvelope } from 'react-icons/fa6'

function Contact() {
  return (
    <div className={styles.contact_wrapper}>
        <div className={styles.contact_con}>
            <div className={styles.contact_info}>
                <h3>Get in touch</h3>
                <p className={styles.contact_desc}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Fuga eius eligendi in laboriosam delectus ipsum inventore alias dolorem ducimus aliquid.
                </p>
                <p>
                    123 Main Street <br/>
                    Bangkok, Thailand
                </p>
                <p><FaPhone/> (+66) 99 352 9334</p>
                <p><FaEnvelope/> supattra14.song@gmail.com</p>
            </div>
            <div className={styles.contact_from}>
                <from action="">
                    <div className={styles.input_group}>
                        <div>
                            <label htmlFor="first name">First Name</label>
                            <input type="text" placeholder='eg.Supattra' />
                        </div>
                        <div>
                            <label htmlFor="last name">Last Name</label>
                            <input type="text" placeholder='eg.Song' />
                        </div>
                    </div>
                    <label htmlFor="email address">Email Address</label>
                    <input type="email" placeholder='eg.supattra14.song@gmail.com' />
                    <label htmlFor="message">Your message</label>
                    <textarea name="" id="" cols="30" rows="10" placeholder='Type here' />
                    <button type='submit'>Submit</button>
                </from>
            </div>
        </div>

      
    </div>
  )
}

export default Contact
