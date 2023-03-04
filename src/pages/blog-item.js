import * as React from "react"
import Layout from "../components/layout"
import HeroSection from "../sections/HeroSection"
import ContactSidebar from "../components/ContactSidebar"
import BlogItemCompassionSection from "../sections/BlogItemCompassionSection"
import Seo from "../components/seo"
import StorySection from "../sections/StorySection"

const BlogItem = () => (
  <Layout>
    <HeroSection heading={"What businesses can learn from the optus breach"} img={"blog-bg"}/>
    <BlogItemCompassionSection />
    <StorySection />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Blog Item" />

export default BlogItem
