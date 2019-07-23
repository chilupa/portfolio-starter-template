import React from "react"
import Layout from "../components/Layout"
import Helmet from "react-helmet"

const IndexPage = () => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Gatsby Portfolio Starter Template</title>
      <link
        rel="canonical"
        href="https://chilupa.github.io/portfolio-starter-template/"
      />
    </Helmet>
  </Layout>
)

export default IndexPage
