import styles from './Contact.module.css'
import Button from '../Button/Button'
import { MdMessage } from "react-icons/md"
import { FaPhoneAlt } from "react-icons/fa"
import { HiMail } from "react-icons/hi"
import { useState } from 'react'

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);

    console.log(name, email, text);
  }

  return (
    <section className={styles.container}>
        <div className={styles.contact_form}>
          <div className={styles.top_btn}>
            <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="16px"/>}/>
            <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="16px"/>}/>
          </div>
          <Button isOutline={true} text="VIA EMAIL FORM" icon={<HiMail fontSize="16px"/>}/>
          <form onSubmit={onSubmit}>
            <div className={styles.form_control}>
              <label htmlFor='name'>Name</label>
              <input type="text" name='name'/>
            </div>
            <div className={styles.form_control}>
              <label htmlFor='email'>Email</label>
              <input type="email" name='email'/>
            </div>
            <div className={styles.form_control}>
              <label htmlFor='text'>Text</label>
              <textarea name="text" rows="5"></textarea>
            </div>
            <div 
            style={{
              display: "flex",
              justifyContent: "end"
            }}>
              <Button text="SUBMIT"/>
            </div>
            <div>
              {name + " " + email + " " + text}
            </div>
          </form>
        </div>
        <div className={styles.contact_image}>
          <img src="/images/contact.svg" alt="contact image" />
        </div>
    </section>
  )
}

export default ContactForm
