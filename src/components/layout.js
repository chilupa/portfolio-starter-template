import React from "react"
import { Link } from "gatsby"

import SocialMedia from "../components/SocialMedia"
import { IoIosArrowDroprightCircle } from "react-icons/io"
import "../styles/layout.scss"

const Layout = () => (
  <div className="Layout">
    <h1 className="FullName">Pavan Chilukuri</h1>
    <h3>Front-end Developer</h3>
    <div>
      <SocialMedia />
    </div>
    <div>
      <Link to="/about" className="LinkStyle">
        <IoIosArrowDroprightCircle className="Proceed" />
      </Link>
    </div>
  </div>
)

export default Layout
