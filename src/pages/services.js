import * as React from "react"
import Layout from "../components/layout"
import HeroSection from "../sections/HeroSection"
import ContactSidebar from "../components/ContactSidebar"
import Seo from "../components/seo"
import ServicesCompassionSection from "../sections/ServicesCompassionSection"

const ServicesPage = () => (
  <Layout>
    <HeroSection heading={"Our Services"} img={'services-bg'} />
    <ServicesCompassionSection />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Services" />

export default ServicesPage
