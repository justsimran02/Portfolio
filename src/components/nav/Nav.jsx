import React from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import {BiSolidUser} from 'react-icons/bi'
import {BsFillBookmarksFill} from 'react-icons/bs'
import {RiCustomerServiceFill} from 'react-icons/ri'
import {MdImportContacts} from 'react-icons/md'
import {useState} from 'react'
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')}  className={activeNav === '#' ? 'active' : ''}><AiFillHome/></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BiSolidUser/></a>
      <a href='#experience'  onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BsFillBookmarksFill/></a>
      <a href='#services'  onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiCustomerServiceFill/></a>
      <a href='#contact'  onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdImportContacts/></a>
    </nav>
  )
}

export default Nav

