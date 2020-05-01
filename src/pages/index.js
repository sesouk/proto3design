import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import MainLogo from "../components/mainLogo"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MainLogo />
    <h1 className='title'>"Concept, Design, Prototype"</h1>
    <p>Welcome to Proto 3design. Our company's main goal is bringing your ideas to life. From concept, designing, to prototyping.</p>
    <div>
      <p>Services we provide:</p>
      <div className='services'>
        <span className='services__holder'><Link className='services__holder--link' to="/concepting/"><p>Concepting</p></Link></span>
        <span className='services__holder'><Link className='services__holder--link' to="/designing/"><p>Designing</p></Link></span>
      </div>
      <div className='services'>  
        <span className='services__holder'><Link className='services__holder--link' to="/prototyping/"><p>Prototyping</p></Link></span>
        <span className='services__holder'><Link className='services__holder--link' to="/3dprinting/"><p>3d Printing</p></Link></span>
      </div>
    </div>
  </Layout>
)

export default IndexPage
