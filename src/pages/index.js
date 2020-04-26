import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Image />
    <h1>"Concept, Design, Prototype"</h1>
    <p>Welcome to Proto 3design. Our company's main goal is bringing your ideas to life. From concept, designing, to prototyping.</p>
    <div>
      <p>Services we provide:</p>
      <ul>
        <li><Link className="navLinks" to="/concepting/">Concepting</Link></li>
        <li><Link className="navLinks" to="/designing/">Designing</Link></li>
        <li><Link className="navLinks" to="/prototyping/">Prototyping</Link></li>
        <li><Link className="navLinks" to="/3dprinting/">3d Printing</Link></li>
      </ul>
    </div>
  </Layout>
)

export default IndexPage
