import React from "react"
import {
  FaGithub,
  FaStackOverflow,
  FaLinkedin,
  FaMedium,
  FaDev,
} from "react-icons/fa"
import "../styles/socialmedia.scss"

const SocialMedia = () => (
  <div>
    <a className="AnchorStyling" href="https://github.com/chilupa" target="_">
      <FaGithub className="SocialMedia" />
    </a>

    <a
      className="AnchorStyling"
      href="https://stackoverflow.com/story/pavanchilukuri"
      target="_"
    >
      <FaStackOverflow className="SocialMedia" />
    </a>

    <a className="AnchorStyling" href="https://medium.com/@chilupa" target="_">
      <FaMedium className="SocialMedia" />
    </a>

    <a className="AnchorStyling" href="https://dev.to/chilupa" target="_">
      <FaDev className="SocialMedia" />
    </a>

    <a
      className="AnchorStyling"
      href="https://www.linkedin.com/in/pavanchilukuri/"
      target="_"
    >
      <FaLinkedin className="SocialMedia" />
    </a>
  </div>
)
export default SocialMedia
