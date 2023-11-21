import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assests/Avatar1.jpeg'
import AVTR2 from '../../assests/Avatar2.jpg'
import AVTR3 from '../../assests/Avatar3.jpg'
import AVTR4 from '../../assests/Avatar4.jpg'

const Testimonials = () => {
  return (
    <section id='testimonials'>
    <h5>Review from clients</h5>
    <h2>Testimonials</h2>

    <div className='container testimonials__container'>
     <article className='testimonial'>
      <div className='client__avatar'>
        <img src={AVTR1} alt="Avatar One"></img>
        <h5 className='client__name'>Ernest Achiever</h5>
      </div>
      <small className='client__review'>
        This website boasts an impressive frontend, combining sleek design with intuitive navigation. The user-friendly interface enhances the overall browsing experience. Visually appealing and well-organized, it effectively captures attention and ensures seamless exploration. A commendable blend of aesthetics and functionality sets it apart in delivering a pleasant user journey.
        </small>
     </article>
     <article className='testimonial'>
      <div className='client__avatar'>
        <img src={AVTR2} alt="Avatar One"></img>
        <h5 className='client__name'>Ernest Achiever</h5>
      </div>
      <small className='client__review'>
        This website boasts an impressive frontend, combining sleek design with intuitive navigation. The user-friendly interface enhances the overall browsing experience. Visually appealing and well-organized, it effectively captures attention and ensures seamless exploration. A commendable blend of aesthetics and functionality sets it apart in delivering a pleasant user journey.
        </small>
     </article>
     <article className='testimonial'>
      <div className='client__avatar'>
        <img src={AVTR3} alt="Avatar One"></img>
        <h5 className='client__name'>Ernest Achiever</h5>
      </div>
      <small className='client__review'>
        This website boasts an impressive frontend, combining sleek design with intuitive navigation. The user-friendly interface enhances the overall browsing experience. Visually appealing and well-organized, it effectively captures attention and ensures seamless exploration. A commendable blend of aesthetics and functionality sets it apart in delivering a pleasant user journey.
        </small>
     </article>
     <article className='testimonial'>
      <div className='client__avatar'>
        <img src={AVTR4} alt="Avatar One"></img>
        <h5 className='client__name'>Ernest Achiever</h5>
      </div>
      <small className='client__review'>
        This website boasts an impressive frontend, combining sleek design with intuitive navigation. The user-friendly interface enhances the overall browsing experience. Visually appealing and well-organized, it effectively captures attention and ensures seamless exploration. A commendable blend of aesthetics and functionality sets it apart in delivering a pleasant user journey.
        </small>
     </article>
    </div>

    
    
    </section>
  )
}

export default Testimonials
