import React from 'react'

const HeroSection = ({heading, img}) => {
    return (
        <section class="hero-section video-overlay">
            <h2 class="hero-heading">{heading}</h2>
            <img src={`/images/${img}.png`} class="wrapper-bg max-sm:hidden" alt="" />
            <img src={`/images/${img}-mob.png`} class="wrapper-bg sm:hidden" alt="" />
            <a href="#section-2" class="smooth-scroll">
                <svg viewBox="0 0 43 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="42.2794" y1="1.40484" x2="21.2794" y2="22.4048" stroke="#DCDCDC" stroke-width="1.5" />
                    <line x1="21.8671" y1="21.8022" x2="1.4697" y2="1.40475" stroke="#DCDCDC" stroke-width="1.5" />
                </svg>
            </a>
        </section>
    )
}

export default HeroSection