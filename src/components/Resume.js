import React, { useState } from 'react'
import ScreenHeading from '../utilities/ScreenHeading'

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0)
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({})

  /* let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return

    Animations.animations.fadeInScreen(props.id)
  } */
  /* const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler) */

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className='resume-heading'>
        <div className='resume-main-heading'>
          <div className='heading-bullet'></div>
          <span>{props.heading ? props.heading : ''}</span>
          {props.fromDate && props.toDate ? (
            <div className='heading-date'>
              {props.fromDate + '-' + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className='resume-sub-heading'>
          <span>{props.subHeading ? props.subHeading : ''}</span>
        </div>
        <div className='resume-heading-description'>
          <span>{props.description ? props.description : ''}</span>
        </div>
      </div>
    )
  }

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: 'Education', logoSrc: 'education.svg' },
    { label: 'Work History', logoSrc: 'work-history.svg' },
    { label: 'Programming Skills', logoSrc: 'programming-skills.svg' },
    { label: 'Projects', logoSrc: 'projects.svg' },
    { label: 'Interests', logoSrc: 'interests.svg' },
  ]

  //here we have
  const programmingSkillsDetails = [
    { skill: 'JavaScript', ratingPercentage: 60 },
    { skill: 'React JS', ratingPercentage: 75 },
    { skill: 'React Native', ratingPercentage: 60 },
    { skill: 'Express JS', ratingPercentage: 60 },
    { skill: 'Node JS', ratingPercentage: 60 },
    { skill: 'Mongo Db', ratingPercentage: 70 },
    { skill: 'Bootstrap', ratingPercentage: 70 },
    { skill: 'HTML', ratingPercentage: 75 },
    { skill: 'CSS', ratingPercentage: 80 },
  ]

  const projectsDetails = [
    {
      title: 'Covid-19 Tracker',
      duration: { fromDate: 'Sep 2019', toDate: 'Oct 2019' },
      description: 'shows the daily Corona statistics around the world.',
      subHeading: 'Technologies Used: ReactJS, Firebase, Material-UI, CSS3',
    },
    {
      title: 'Amazon Clone',
      duration: { fromDate: 'Dec 2020', toDate: 'Jan 2021' },
      description:
        'An ecommerce application designed to sell products online with payment system integration',
      subHeading:
        'Technologies Used:  ReactJS, MongoDB, ExpressJs, NodeJs, Redux.',
    },
    {
      title: 'Ecommerce Website ',
      duration: { fromDate: 'Feb 2021', toDate: 'April 2021' },
      description:
        'Online ecommerce website for showcasing and selling products onlne with payment system integration, both Paypal and Stripe',
      subHeading:
        'Technologies Used: Mongo DB, Epress Js, React Js, Node JS, Redux, Bootstrap.',
    },
  ]

  const resumeDetails = [
    <div className='resume-screen-container' key='education'>
      <ResumeHeading
        heading={'Integration course and orientation course'}
        subHeading={'VHS Krefeld'}
        fromDate={'Jan 2016'}
        toDate={'July 2016'}
      />

      <ResumeHeading
        heading={'German course'}
        subHeading={'LearnArt Krefeld'}
        fromDate={'Sep 2017'}
        toDate={'Jan 2018'}
      />
      <ResumeHeading
        heading={'Certificate | Full Stack developer'}
        subHeading={'Digital Career Institute'}
        fromDate={'Nov 2019'}
        toDate={'Dec 2020'}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className='resume-screen-container' key='work-experience'>
      <div className='experience-container'>
        <ResumeHeading
          heading={'Active IT Recruitment'}
          subHeading={'Frontend Developer INTERN'}
          fromDate={'Sep 2020'}
          toDate={'Nov 2020'}
        />
        <div className='experience-description'>
          <span className='resume-description-text'>
            Development of a 100% cloud-based CRM application (Customer
            Relationship Management) from scratch.
          </span>
        </div>
        <div className='experience-description'>
          <span className='resume-description-text'>
            - Developed Login maske with full functionality using JWT (Json Web
            Token) as well responsive layout.
          </span>
          <br />
          <span className='resume-description-text'>
            - I stretch my mental capacity to develope UI as per the given
            designs.
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className='resume-screen-container programming-skills-container'
      key='programming-skills'
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className='skill-parent' key={index}>
          <div className='heading-bullet'></div>
          <span>{skill.skill}</span>
          <div className='skill-percentage'>
            <div
              style={{ width: skill.ratingPercentage + '%' }}
              className='active-percentage-bar'
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className='resume-screen-container' key='projects'>
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className='resume-screen-container' key='interests'>
      <ResumeHeading
        heading='Sport'
        description='Fitness is for me the most favourite sport, when I go to the gym I feel my self more motivated to accomplish my goals.'
      />
      <ResumeHeading
        heading='Music'
        description="Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on."
      />
      <ResumeHeading
        heading='Competitive Gaming'
        description='I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most.'
      />
    </div>,
  ]

  const handleCarousal = (index) => {
    let offsetHeight = 360

    let newCarousalOffset = {
      style: { transform: 'translateY(' + index * offsetHeight * -1 + 'px)' },
    }

    setCarousalOffsetStyle(newCarousalOffset)
    setSelectedBulletIndex(index)
  }

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? 'bullet selected-bullet' : 'bullet'
        }
        key={index}
      >
        <img
          className='bullet-logo'
          src={require(`../assets/Resume/${bullet.logoSrc}`).default}
          alt='B'
        />
        <span className='bullet-label'>{bullet.label}</span>
      </div>
    ))
  }

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className='resume-details-carousal'
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    )
  }

  return (
    <div className='resume-container screen-container fade-in' id='resume'>
      <div className='resume-content'>
        <ScreenHeading title={'Resume'} subHeading={'My formal Bio Details'} />
        <div className='resume-card'>
          <div className='resume-bullets'>
            <div className='bullet-container'>
              <div className='bullet-icons'></div>
              <div className='bullets'>{getBullets()}</div>
            </div>
          </div>

          <div className='resume-bullet-details'>{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  )
}

export default Resume
