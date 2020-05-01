import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import design from '../images/design.png'

const Designing = () => (
  <Layout>
    <SEO title="Designing" />
    <div className='bodyContainer'>
    <h1 className='title'>Designing</h1>
    <img style={{ display: 'block', margin: '0 auto', height: '350px' }} src={design} alt='designing'/>
    <p>Using 3d software our engineers and designers will draw up and design your concept. They will guide you in using GD&T, the static and dynamics of mechanical engineering in what will work and what won’t work. They will then provide you with an engineer drawing with all the dimensions of your part. They will also do a 3d rendering of your product.</p>
    </div>
  </Layout>
)

export default Designing
