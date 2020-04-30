import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import MainLogo from "../components/mainLogo"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MainLogo />
    <h1>"Concept, Design, Prototype"</h1>
    <p>Welcome to Proto 3design. Our company's main goal is bringing your ideas to life. From concept, designing, to prototyping.</p>
    <div>
      <p>Services we provide:</p>
      <div>
        <span><Link className="navLinks" to="/concepting/">Concepting</Link></span>
        <span><Link className="navLinks" to="/designing/">Designing</Link></span>
        <span><Link className="navLinks" to="/prototyping/">Prototyping</Link></span>
        <span><Link className="navLinks" to="/3dprinting/">3d Printing</Link></span>
      </div>
    </div>
  </Layout>
)

export default IndexPage
