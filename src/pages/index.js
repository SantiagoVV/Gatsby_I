import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Especie from "../components/especie";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Página de Inicio</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <StaticImage
        src="../images/gato_inicio.png"
        alt="gatito"
      />
      <Especie name="Gato"/>
    </div>
    <p><Link to="/page-2/">Ir a pagina secundaria</Link></p>
  </Layout>
)

export default IndexPage