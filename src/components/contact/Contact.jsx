import React from 'react'
import './contact.css'
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io5";
const Contact = () => {
  return (
    <section id='contact'>
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>

    <div className='container contact__container'>
    <div className='contact__options'>
    <article className='contact_option'>
      <MdOutlineEmail className='contact__option-icon'/>
      <h4>Email</h4>
      <h5>simjena2004@gmail.com</h5>
      <a href='mailto:simjena2004@gmail.com' target='_blank'>Send a message</a>
    </article>
    <article className='contact_option'>
      <RiMessengerFill className='contact__option-icon'/>
      <h4>Messenger</h4>
      <h5>Simran Jena</h5>
      <a href='https://facebook.com' target='_blank'>Send a message</a>
    </article>
    <article className='contact_option'>
      <IoLogoWhatsapp className='contact__option-icon'/>
      <h4>Whatsapp</h4>
      <h5>+123456789</h5>
      <a href='https://whatsapp.com' target='_blank'>Send a message</a>
    </article>
    </div>

    {/* END OF CONTACT OPTIONS */}

    <form action=''>
    <input type='text' name ='name' placeholder='Your Full Name' required/>
    <input type='email' name='email' placeholder='Your Email' required/>
    <textarea name='message' rows='7' placeholder='Your Message' required/>    
    <button type='submit' className='btn btn-primary'>Send Message</button>
    </form>
    </div>
    </section>
  )
}

export default Contact
