import React from "react"
import SocialMedia from "../components/SocialMedia"
import { IoIosArrowDroprightCircle } from "react-icons/io"
import "../styles/layout.scss"

const Layout = () => (
  <div className="Layout">
    <h1>Pavan Chilukuri</h1>
    <h3>Front-end Developer</h3>
    <div>
      <SocialMedia />
    </div>
    <div>
      <IoIosArrowDroprightCircle className="Proceed" />
    </div>
  </div>
)

export default Layout
