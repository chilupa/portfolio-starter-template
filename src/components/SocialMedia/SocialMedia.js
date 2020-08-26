import React from "react"
import { socialUrls as urls } from "../../constants"
import "../../styles/socialmedia.scss"

const SocialMedia = () => (
  <div>
    {urls.map(({ url, icon }, index) => (
      <a key={index} className="AnchorStyling" href={url} target="_">
        {icon}
      </a>
    ))}
  </div>
)
export default SocialMedia
