import React from 'react'
import ScreenHeading from '../utilities/ScreenHeading'
import author from '../me.jpg'

export default function AboutMe(props) {
  const SCREEN_CONSTSANTS = {
    description:
      'Hello! I am Majd. I have been developing websites for one year. I am Full-Stack Web Developer. Technologies I use is MERN(MongoDB, Express, ReactJS and NodeJS). I create responsive websites that are displayed on all devices desktops and smartphones. Of course, before I begin developing any webapp, Landing Page, Business Website or E-commerce, I need to have a ready-made project layout (sketch). And I’m ready to do this for you, before we start developing your website, we will discuss all the details of your niche with you.',
    highlights: {
      bullets: [
        'Full Stack web and mobile development',
        'Interactive Front End as per the design',
        'React and React Native',
        'Redux for State Mnanagement',
        'Building REST API',
        'Managing database',
      ],
      heading: 'Here are a Few Highlights:',
    },
  }
  const renderHighlight = () => {
    return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
      <div className='highlight' key={i}>
        <div className='highlight-blob'></div>
        <span>{value}</span>
      </div>
    ))
  }

  return (
    <div className='about-me-container screen-container fade-in' id='about'>
      <div className='about-me-parent'>
        <ScreenHeading title={'About Me'} subHeading={'Why Choose Me?'} />
        <div className='col-lg-12 col-xm-12'>
          <div className='photo-wrap mb-5'>
            <img className='profile-img' src={author} alt='author...' />
          </div>
        </div>
        <div className='about-me-card'>
          <div className='about-me-profile'></div>
          <div className='about-me-details'>
            <span className='about-me-description'>
              {SCREEN_CONSTSANTS.description}
            </span>
            <div className='about-me-highlights'>
              <div className='highlight-heading'>
                <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className='about-me-options'>
              <button className='btn primary-btn'> Hire Me </button>
              <a href='#' download='/assets/CV.pdf'>
                <button className='btn highlighted-btn'>Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* import React from 'react'
import author from '../me.jpg'

const AboutMe = () => {
  return (
    <div id='about' className='container py-5'>
      <div className='row'>
        <div className='col-lg-6 col-xm-12'>
          <div className='photo-wrap mb-5'>
            <img className='profile-img' src={author} alt='author...' />
          </div>
        </div>
        <div className='col-lg-6 col-xm-12'>
          <h1 className='about-heading'>about me</h1>
          <p>
            Hello! I am Majd. I have been developing websites for one year. I'm
            Full-Stack Web Developer. Technologies I use is MERN(MongoDB,
            Express, ReactJS and NodeJS). I create responsive websites that are
            displayed on all devices desktops and smartphones. Of course, before
            I begin developing any webapp, Landing Page, Business Website or
            E-commerce, I need to have a ready-made project layout (sketch). And
            I’m ready to do this for you, before we start developing your
            website, we will discuss all the details of your niche with you.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe */
