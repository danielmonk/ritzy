import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404" keywords={[`Ritzy Studios`, `Ritzy`, `Peterborough Barbers`, `Hair Peterborough`, `Hair Stylist Peterborough`, `Hair Colouring Peterborough`, `Mens Hair Peterborough`, `Skin Fade Peterborough` ,`Beard Trim Peterborough` ,`Hair and Beard Peterborough`]} />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
