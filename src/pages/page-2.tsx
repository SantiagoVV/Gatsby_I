// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = (props: PageProps) => (
  <Layout>
    <SEO title="Page two" />
    <h1>Pagina Secundaria</h1>
    <Link to="/">Volver a la pagina principal</Link>
  </Layout>
)

export default SecondPage
