import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import AboutCompassionSection from "../sections/AboutCompassionSection"
import ContactSidebar from "../components/ContactSidebar"
import HeroSection from "../sections/HeroSection"

const AboutPage = () => (
  <Layout>
    <HeroSection heading={"Your team"} img={'about-hero-bg'} />
    <AboutCompassionSection />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="About" />

export default AboutPage
