import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { techStackIcons, techStackImgs } from '../constants'
import TechIcon from '../components/Models/TechLogos/TechIcon'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap';


const TechStack = () => {
  useGSAP(() => {
    gsap.fromTo('.tech-card', { y: 50, opacity: 0 }, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power2.inOut',
      stagger: 0.2,
      ScrollTrigger: {
        trigger: '#skills',
        start: 'top center'
      }
    })
  })


  return (
    <div id="skills" className='flex-center section-padding'>
      <div className='w-full h-full md:px-10 px-5'>
        <TitleHeader
          title="My Preferred Tech Stack"
          sub="🤝 The skills i bring to the table"
        />
        <div className='tech-grid'>
          {techStackIcons.map((icon) => (
            <div key={icon.name} className='card-border tech-card overflow-hidden group xl:rounded-full rounded-lg' >
              <div className='tech-card-animated-bg' />
              <div className='tech-card-content'>
                <div className='tech-icon-wrapper'>
                  <TechIcon model={icon} />
                </div>
                <div className='padding-x w-full'>
                  <p>{icon.name}</p>
                </div>
              </div>
            </div>
          ))}
          {/* just in case if i dont get the three icon of a perticular tech i can use this image div to render the image of the tech this is fully customizable so can add as many tech  */}
          {/* {techStackImgs.map((icon) => (
            <div key={icon.name} className='card-border tech-card overflow-hidden group xl:rounded-full rounded-lg' >
              <div className='tech-card-animated-bg' />
              <div className='tech-card-content'>
                <div className='tech-icon-wrapper'>
                  <img src={icon.imgPath} />
                </div>
                <div className='padding-x w-full'>
                  <p>{icon.name}</p>
                </div>
              </div>

            </div>

          ))} */}

        </div>

      </div>
    </div>
  )
}

export default TechStack