module.exports = {
  pathPrefix: "/portfolio-starter-template",
  plugins: [
    // Typography plugin
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // Add your tracking ID here
        trackingId: "",
        head: true,
      },
    },
  ],
}
