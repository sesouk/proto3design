import React from "react"

import Layout from "../components/layout"
import proto from '../images/prototype.png'
import SEO from "../components/seo"

const Prototyping = () => (
  <Layout>
    <SEO title="Prototyping" />
    <div className='bodyContainer'>
    <h1 className='title'>Prototyping</h1>

    <img style={{ display: 'block', margin: '0 auto', height: '350px' }} src={proto} alt='protoyping'/>
    <p>Using the latest state of the art additive manufacturing machines and methods, our team will take your design and make a physical and functioning prototype. Using methods like FDM, SLA, SLS and PolyJet 3D printing our team will have a quick turnaround time for producing your prototype.</p>
    </div>
  </Layout>
)

export default Prototyping
