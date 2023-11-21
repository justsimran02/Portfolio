import React from 'react'
import './about.css'
import ME from '../../assests/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {BsBriefcaseFill} from 'react-icons/bs'
import {FaFolderOpen} from 'react-icons/fa'

const About = () => {
  return (
   <section id='about'>
    <h5>Get to Know</h5>
    <h2>About Me</h2>

    <div className='container about__container'> 
    <div className='about__me'>
    <div className='about__me-image'>
      <img src={ME} alt='About Image'/>
    </div>
    </div>

    <div className='about__content'>
    <div className='about__cards'>
      <article className='about__card'>
      <FaAward className='about__icon'/>
      <h5>Experience</h5>
      <small>Fresher</small>

      </article>
      <article className='about__card'>
      <BsBriefcaseFill className='about__icon'/>
      <h5>Internships</h5>
      <small>Worked as a Project Intern at HTC GLOBAL SERVICES, Chennai</small>

      </article>
      <article className='about__card'>
      <FaFolderOpen className='about__icon'/>
      <h5>Projects</h5>
      <small>3+ Completed Projects</small>

      </article>
    </div>

    <p>
    I am pursuing bachelors degree in Electronics and Communication Engineering from Vellore Institute Of technology, Chennai.
    My journey has been an exciting fusion of hardware and software, as I've gained a solid foundation in electronics, circuits, and systems, while also nurturing a deep fascination for coding, algorithms, and software development. Adapting is my forte! With a proactive
attitude and a drive to explore, I've been the go-to person in my circle for bridging the gap between hardware and software.
    </p>

    <a href='#contact' className='btn btn-primary'>Let's Talk</a>

    </div>
    </div>
   </section>
  )
}

export default About
