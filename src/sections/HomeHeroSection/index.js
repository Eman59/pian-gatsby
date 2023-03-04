import React, { useEffect } from "react"
import "./styles.css"

const HomeHeroSection = () => {
  useEffect(() => {
    let video = document.querySelectorAll('video');
    setTimeout(function () {
      video.forEach(vid => vid.play());
    }, 1000)
  })

  return (
    <>
      <section className="hero-section video-overlay">
        <svg className="hero-logo" viewBox="0 0 91 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 0.264648H12.3337C17.4354 0.264648 20.7097 3.35461 20.7097 8.44027C20.7097 13.5259 17.4844 17.1342 11.8039 17.1342H2.42177V27.7863H0V0.264648ZM2.42177 2.87384V14.525H11.7015C15.6436 14.525 18.2367 12.319 18.2367 8.59552C18.2367 4.87204 15.8149 2.87634 12.0599 2.87634H2.42177V2.87384Z"
            fill="#DCDCDC" />
          <path d="M27.6772 0.264648H30.1934V27.7863H27.6772V0.264648Z" fill="#DCDCDC" />
          <path
            d="M36.3872 27.7863L47.9687 0.264648H50.937L62.5162 27.7863H59.8395L56.4796 19.7259H42.4439L39.0662 27.7863H36.3894H36.3872ZM43.4985 17.1167H55.4027L49.4506 2.87634L43.4985 17.1167Z"
            fill="#DCDCDC" />
          <path
            d="M88.1942 0.264648H90.5805V27.7863H87.8915L71.483 4.12334V27.7863H69.0967V0.264648H71.7857L88.192 23.9852V0.264648H88.1942Z"
            fill="#DCDCDC" />
        </svg>
        <video className="wrapper-video" src="videos/production ID_4787846.mp4" muted autoplay loop></video>
        <video className="wrapper-video" src="videos/production ID_4787846.mp4" muted autoplay loop></video>
        <a href="#section-2" className="smooth-scroll">
          <svg viewBox="0 0 43 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="42.2794" y1="1.40484" x2="21.2794" y2="22.4048" stroke="#DCDCDC" stroke-width="1.5" />
            <line x1="21.8671" y1="21.8022" x2="1.4697" y2="1.40475" stroke="#DCDCDC" stroke-width="1.5" />
          </svg>
        </a>
      </section>
      <section id="section-2" className="acknowledges-section">
        <div className="acknowledges-inner">
          <h1 className="heading">In the spirit of reconciliation, acknowledges the Traditional Custodians of the
            land on which we
            work. We pay our respects to their Elders past, present and emerging, and extend that respect to all
            Aboriginal and Torres Strait Islander peoples today.</h1>
        </div>
      </section>
      <section className="video-wrapper video-overlay">
        <video className="wrapper-video" src="videos/production ID_4787846.mp4" muted autoplay loop></video>
        <video className="wrapper-video" src="videos/production ID_4787846.mp4" muted autoplay loop></video>
      </section>
    </>
  )
}

export default HomeHeroSection
