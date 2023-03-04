import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ContactSidebar from "../components/ContactSidebar"
import BlogListSection from "../sections/BlogListSection"
import HeroSection from "../sections/HeroSection"

const BlogPage = () => (
  <Layout>
    <HeroSection heading={"Insights"} img={"blog-list-bg"} />
    <BlogListSection />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Blog" />

export default BlogPage
