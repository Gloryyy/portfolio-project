import React from 'react'
import Typed from 'react-typed'
import { Link } from 'react-scroll'

const Header = () => {
  return (
    <div id='home' className='header-wraper'>
      <div className='main-info'>
        <h1>Web development and websites promotions</h1>
        <Typed
          className='typed-text'
          loop
          typeSpeed={40}
          backSpeed={60}
          strings={[
            'Enthusiastic Dev',
            'Full Stack Developer',
            'MERN Stack Dev',
            'Cross Platform Dev',
            'React/React Native Dev',
          ]}
        />
        <Link to='contacts' smooth={true} href='#' className='btn-main-offer'>
          contact me
        </Link>
      </div>
    </div>
  )
}

export default Header
