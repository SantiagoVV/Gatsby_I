

import { Link } from "gatsby"

import React from "react"
import Autor from "../components/autor"
import Layout from "../components/layout"
import Seo from "../components/seo"

function About() {
  return (
    <Layout>
      <h1>Bienvenido al about</h1>
      <img src="https://www.petinclass.es/fotos/Cursos_28_1509118868.jpg" alt="gatito" />
      <Link to="/">Volver a la pagina principal</Link>
      <Autor/>
    </Layout>
  )
}

export const Head = () => <Seo title="About" />

export default About

