// import React from 'react'
import styles from './ContactHeader.module.css'


const ContactHeader = () => {
  return (
    <div className={`container ${styles.contact_section} `}>
        <h1>CONTACT US</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
             scrambled it to make a type specimen book.</p>
    </div>
  )
}

export default ContactHeader
