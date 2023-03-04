import * as React from "react"
import { LayoutHome } from "../components/layout"
import Seo from "../components/seo"
import CompassionSection from "../sections/CompassionSection"
import HomeHeroSection from "../sections/HomeHeroSection"

const IndexPage = () => (
  <LayoutHome>
    <HomeHeroSection />
    <CompassionSection />
  </LayoutHome>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
