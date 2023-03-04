import React from "react"
import "./styles.css"

const Footer = () => {
  return (
    <footer>
      <svg class="footer-logo" viewBox="0 0 73 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 0H9.91078C14.0103 0 16.6414 2.16524 16.6414 5.72893C16.6414 9.29262 14.0497 11.8211 9.48509 11.8211H1.94603V19.2853H0V0ZM1.94603 1.82834V9.99273H9.40281C12.5705 9.99273 14.6542 8.44688 14.6542 5.83772C14.6542 3.22855 12.7082 1.8301 9.69078 1.8301H1.94603V1.82834Z"
          fill="#DCDCDC" />
        <path d="M22.2402 0H24.2621V19.2853H22.2402V0Z" fill="#DCDCDC" />
        <path
          d="M29.2393 19.2853L38.5456 0H40.9308L50.2354 19.2853H48.0845L45.3846 13.6371H34.1061L31.392 19.2853H29.241H29.2393ZM34.9536 11.8088H44.5193L39.7364 1.8301L34.9536 11.8088Z"
          fill="#DCDCDC" />
        <path
          d="M70.8694 0H72.7869V19.2853H70.6261L57.441 2.70391V19.2853H55.5234V0H57.6842L70.8676 16.6218V0H70.8694Z"
          fill="#DCDCDC" />
      </svg>
      <div class="footer-menu">
        <a class="footer-link" href="#">04 0404 0404</a>
        <a class="footer-link" href="#">contact@tensq.com.au</a>
        <a class="footer-link" href="#">Level 11 George Street <br /> Melbourne, VIC, 3000</a>
      </div>
      <div class="footer-newslatter">
        <p class="footer-link">Subscribe for our latest news.</p>
        <label for="newslatter">
          <input type="email" id="newslatter" placeholder="Enter email address & press enter" />
        </label>
      </div>
      <div class="footer-follow">
        <p class="footer-link">Follow Us</p>
        <ul>
          <li><a class="footer-link !mb-0" href="#">LinkedIn</a></li>
          <li><a class="footer-link !mb-0" href="#">Instagram</a></li>
          <li><a class="footer-link !mb-0" href="#">Facebook</a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
