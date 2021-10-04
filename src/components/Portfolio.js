import React from 'react'
import netflix from '../images/netflix.png'
import covidTracker from '../images/covid-tracker.png'
import shopify from '../images/shopify.png'
import travelAdvisor from '../images/travel-advisor.png'
import crownClothing from '../images/crwn-clothing.png'
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons'
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from 'react-popupbox'
import 'react-popupbox/dist/react-popupbox.css'

const Portfolio = () => {
  // Netflix
  const openPopupboxNetflix = () => {
    const content = (
      <>
        <img
          className='portfolio-image-popupbox'
          src={netflix}
          alt='Netflix Clone Project...'
        />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque
          illo est expedita quos adipisci suscipit unde itaque qui perferendis.
        </p>
        <b>Demo:</b>{' '}
        <a
          className='hyper-link'
          onClick={() => window.open('https://netflix-clone-2792a.web.app/')}
        >
          https://netflix-clone-2792a.web.app/
        </a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigNetflix = {
    titleBar: {
      enable: true,
      text: 'Netflix clone project.',
    },
    fadeIn: true,
    fadeInSpeed: 500,
  }

  // Covid Tracker App
  const openPopupboxCovidTracker = () => {
    const content = (
      <>
        <img
          className='portfolio-image-popupbox'
          src={covidTracker}
          alt='Covid tracker App Project...'
        />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque
          illo est expedita quos adipisci suscipit unde itaque qui perferendis.
        </p>
        <b>Demo:</b>{' '}
        <a
          className='hyper-link'
          onClick={() =>
            window.open('https://covid-19-tracker-d81de.web.app/', '_blank')
          }
        >
          https://covid-19-tracker-d81de.web.app/
        </a>
        <br />
        <b>GitHub:</b>{' '}
        <a
          className='hyper-link'
          onClick={() =>
            window.open('https://github.com/Gloryyy/Covid-19_Tracker', '_blank')
          }
        >
          https://github.com/Gloryyy/Covid-19_Tracker
        </a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigCovidTracker = {
    titleBar: {
      enable: true,
      text: 'City Guide App project.',
    },
    fadeIn: true,
    fadeInSpeed: 500,
  }

  // Shopify Project
  const openPopupboxShopify = () => {
    const content = (
      <>
        <img
          className='portfolio-image-popupbox'
          src={shopify}
          alt='ecommerce Project...'
        />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque
          illo est expedita quos adipisci suscipit unde itaque qui perferendis.
        </p>
        <b>GitHub:</b>{' '}
        <a
          className='hyper-link'
          onClick={() =>
            window.open(
              'https://github.com/Gloryyy/ecommerce-next-shopify',
              '_blank'
            )
          }
        >
          https://github.com/Gloryyy/ecommerce-next-shopify
        </a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigShopify = {
    titleBar: {
      enable: true,
      text: 'Shopify Nextjs and Typescript project.',
    },
    fadeIn: true,
    fadeInSpeed: 500,
  }

  // Travel advisor Project
  const openPopupboxTravelAdvisor = () => {
    const content = (
      <>
        <img
          className='portfolio-image-popupbox'
          src={travelAdvisor}
          alt='travel advisor'
        />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque
          illo est expedita quos adipisci suscipit unde itaque qui perferendis.
        </p>
        <b>Demo:</b>{' '}
        <a
          className='hyper-link'
          onClick={() =>
            window.open('https://travel-advisor-tracker.netlify.app/', '_blank')
          }
        >
          https://travel-advisor-tracker.netlify.app/
        </a>
        <br />
        <b>GitHub:</b>{' '}
        <a
          className='hyper-link'
          onClick={() =>
            window.open('https://github.com/Gloryyy/travel_advisor', '_blank')
          }
        >
          https://github.com/Gloryyy/travel_advisor
        </a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigTravelAdvisor = {
    titleBar: {
      enable: true,
      text: 'Task Manager React and Redux project.',
    },
    fadeIn: true,
    fadeInSpeed: 500,
  }

  // Crown Clothing App
  const openPopupboxCrownClothing = () => {
    const content = (
      <>
        <img
          className='portfolio-image-popupbox'
          src={crownClothing}
          alt='Crown clothing App'
        />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque
          illo est expedita quos adipisci suscipit unde itaque qui perferendis.
        </p>
        <b>Demo:</b>{' '}
        <a
          className='hyper-link'
          onClick={() =>
            window.open(
              'https://cron-clothing-app-live.herokuapp.com/',
              '_blank'
            )
          }
        >
          https://cron-clothing-app-live.herokuapp.com/
        </a>
        <br />
        <b>GitHub:</b>{' '}
        <a
          className='hyper-link'
          onClick={() =>
            window.open('https://github.com/Gloryyy/crwn-clothing', '_blank')
          }
        >
          https://github.com/Gloryyy/crwn-clothing
        </a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigCrownClothing = {
    titleBar: {
      enable: true,
      text: 'Crown Clothing App project.',
    },
    fadeIn: true,
    fadeInSpeed: 500,
  }

  return (
    <div id='portfolio' className='portfolio-wrapper'>
      <div className='container'>
        <h1 className='text-uppercase text-center py-5'>portfolio</h1>
        <div className='image-box-wrapper'>
          <div className='portfolio-image-box' onClick={openPopupboxNetflix}>
            <img
              className='portfolio-image'
              src={netflix}
              alt='Netflix Clone Project...'
            />
            <div className='overflow'></div>
            <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
          </div>
          {/* - */}
          <div
            className='portfolio-image-box'
            onClick={openPopupboxCovidTracker}
          >
            <img
              className='portfolio-image'
              src={covidTracker}
              alt='City Guide Project...'
            />
            <div className='overflow'></div>
            <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className='portfolio-image-box' onClick={openPopupboxShopify}>
            <img className='portfolio-image' src={shopify} alt='shopify' />
            <div className='overflow'></div>
            <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
          </div>
          {/* - */}
          <div
            className='portfolio-image-box'
            onClick={openPopupboxTravelAdvisor}
          >
            <img
              className='portfolio-image'
              src={travelAdvisor}
              alt='travel advisor'
            />
            <div className='overflow'></div>
            <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
          </div>
          {/* - */}
          <div
            className='portfolio-image-box'
            onClick={openPopupboxCrownClothing}
          >
            <img
              className='portfolio-image'
              src={crownClothing}
              alt='Crown Clothing Project...'
            />
            <div className='overflow'></div>
            <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigNetflix} />
      <PopupboxContainer {...popupboxConfigCovidTracker} />
      <PopupboxContainer {...popupboxConfigShopify} />
      <PopupboxContainer {...popupboxConfigTravelAdvisor} />
      <PopupboxContainer {...popupboxConfigCrownClothing} />
    </div>
  )
}

export default Portfolio
