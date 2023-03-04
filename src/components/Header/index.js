import React, { useEffect } from 'react'
import './styles.css'

const Header = () => {
    useEffect(() => {
        let navToggler = document.querySelector('.nav-toggler');
        let header = document.querySelector('.site-header');
        navToggler?.addEventListener('click', (e) => {
            e.preventDefault();
            navToggler.classList.toggle('active');
            header.classList.toggle('active');
        })
    }, [])

    const handlecontactBtn = (e) => {
        let body = document.querySelector('body');
        let contactWrapper = document.querySelector('.contact-wrapper');
        e.preventDefault();
        body.classList.add('active');
        contactWrapper.classList.add('active');
    }

    return (
        <header class="site-header">
            <nav>
                <a class="nav-link max-md:hidden" href="/about">About</a>
                <a class="nav-link max-md:hidden" href="/services">Services</a>
                <a class="nav-logo" href="/">
                    <svg viewBox="0 0 60 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0 0H8.06658C11.4033 0 13.5448 2.02093 13.5448 5.3471C13.5448 8.67328 11.4353 11.0332 7.7201 11.0332H1.58391V18H0V0ZM1.58391 1.70649V9.32672H7.65314C10.2314 9.32672 11.9274 7.8839 11.9274 5.44864C11.9274 3.01337 10.3434 1.70812 7.88752 1.70812H1.58391V1.70649Z"
                            fill="#DCDCDC" />
                        <path d="M18.1019 0H19.7476V18H18.1019V0Z" fill="#DCDCDC" />
                        <path
                            d="M23.7982 18L31.3729 0H33.3142L40.8874 18H39.1367L36.9393 12.7282H27.7594L25.5504 18H23.7997H23.7982ZM28.4492 11.0217H36.2349L32.3421 1.70812L28.4492 11.0217Z"
                            fill="#DCDCDC" />
                        <path
                            d="M57.6817 0H59.2425V18H57.4838L46.7522 2.5237V18H45.1914V0H46.9501L57.6803 15.514V0H57.6817Z"
                            fill="#DCDCDC" />
                    </svg>
                </a>
                <a class="nav-link max-md:hidden" href="/blog">Blog</a>
                <a class="nav-link contact-drawer-link max-md:hidden" href="#" onClick={handlecontactBtn}>Contact</a>
                <button class="nav-toggler">
                    <svg viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line y1="0.5" x2="20" y2="0.5" stroke="#DCDCDC" />
                        <line y1="17.5" x2="20" y2="17.5" stroke="#DCDCDC" />
                    </svg>
                </button>
            </nav>
            <ul class="mobile-nav">
                <li><a class="nav-link" href="/about">About</a></li>
                <li><a class="nav-link" href="/services">Services</a></li>
                <li><a class="nav-link" href="/blog">Blog</a></li>
                <li><a class="nav-link contact-drawer-link" href="#" onClick={handlecontactBtn}>Contact</a></li>
            </ul>
            <ul class="mobile-nav">
                <li><a class="nav-link" href="#">04040404040</a></li>
                <li><a class="nav-link" href="#">contact@tensq.com.au</a></li>
                <li><a class="nav-link" href="#">Level 2 Cubitt St <br /> Melbourne, VIC, 3000</a></li>
            </ul>
        </header>
    )
}

export default Header