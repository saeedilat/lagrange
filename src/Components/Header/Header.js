import React from 'react'
import Navbar from './Navbar'
import './Header.css'
export default function Header() {
  return (
    <div className='header-container'>
      <Navbar />
      <div className='subtitle-container'>
      <div className='description'>
        <p className='hello'>
            Hello
        </p>
        <h1 className='intro'>
            I'm saeedilat,I am <br />a web developer
        </h1>
        <p>
             Lorem ipsum odor amet, consectetuer adipiscing elit. Turpis tempor eros arcu vel porta id. Arcu tempus condimentum nostra; velit dis suspendisse egestas dui. Himenaeos lacinia etiam, consequat b
        </p>
        <div className='button'>
            <a href='#' className='button-link'>
            view sampel works!
            </a>
        </div>
      </div>
      <div className='personal-img'>
        <img  src='./images/banner-user-image-one.png' />
      </div>
      </div>
    </div>
  )
}
