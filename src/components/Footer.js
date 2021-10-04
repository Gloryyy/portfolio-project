import React from 'react'
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from 'react-share'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4 col-md-6 col-sm-6'>
            <div className='d-flex'>
              <p>city Germany Krefeld 2021</p>
            </div>
            <div className='d-flex'>
              <a href='tel:+4917661788431'>+49(1766)17-88-431</a>
            </div>
            <div className='d-flex'>
              <p>majd.developer12@gmail.com</p>
            </div>
          </div>
          <div className='col-lg-3 col-md-2 col-sm-6'>
            <div className='row'>
              <div className='col'>
                <a className='footer-nav'>Home</a>
                <br />
                <a className='footer-nav'>About me</a>
                <br />
                <a className='footer-nav'>Services</a>
              </div>
              <div className='col'>
                <a className='footer-nav'>Experience</a>
                <br />
                <a className='footer-nav'>Portfolio</a>
                <br />
                <a className='footer-nav'>Contacts</a>
              </div>
            </div>
          </div>
          <div className='col-lg-5 col-md-5 col-sm-6 align-items-center'>
            <div className='d-flex justify-content-center'>
              <FacebookShareButton
                url='https://www.facebook.com/majd.warrak.5'
                quote='FullStack Developer'
                hashtag='#javascript'
              >
                <FacebookIcon className='mx-3' size={36} />
              </FacebookShareButton>
              {/* - */}
              <LinkedinShareButton
                url='https://www.linkedin.com/in/majd-warrak-8444961a6/'
                quote='FullStack Developer'
                hashtag='#javascript'
              >
                <LinkedinIcon className='mx-3' size={36} />
              </LinkedinShareButton>
            </div>
            <p className='pt-3 text-center'>
              Copyright&copy;
              {new Date().getFullYear()}&nbsp;New Horizon | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
