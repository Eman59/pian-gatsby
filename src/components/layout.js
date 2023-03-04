/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import Footer from "./Footer"
import "../styles/global.css"
import Header from "./Header"
import ContactSidebar from "./ContactSidebar"
import useSmoothScroll from "../utils/smoothScroll"

const Layout = ({ children }) => {
  useSmoothScroll()
  return (
    <>
      <Header />
      <ContactSidebar />
      <div>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export const LayoutHome = ({ children }) => {
  useSmoothScroll()
  return (
    <>
      <div>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
