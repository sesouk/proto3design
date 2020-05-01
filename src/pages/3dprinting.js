import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import print3d from '../images/3dprint.png'

const Printing = () => (
  <Layout>
    <SEO title="3D Printing" />
    <div className='bodyContainer'>
    <h1 className='title'>3D Printing</h1>
    <img style={{ display: 'block', margin: '0 auto', height: '350px' }} src={print3d} alt='3 d printing'/>
    <p>If you just want to 3D print something and already have the file for it, we offer that service as well. Using our state-of-the-art additive machines, we can produce your part for you within hours.</p>
    <p>Or if you're just a hobbyist and want something printed in a smaller scale, our company provides that as well. Using our smaller 3D printers we will print you the file you want.</p>
    </div>
  </Layout>
)

export default Printing
