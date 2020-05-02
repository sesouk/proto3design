import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import concept from '../images/concept.png'

const Concepting = () => (
  <Layout>
    <SEO title="Concepting" />
    <div className='bodyContainer'>
    <h1 className='title'>Concepting</h1>
    <img className='image' src={concept} alt='concepting'/>
    <p>	Our team of highly skilled engineers and designers will listen to the need of your company or to your idea and help guide you to a solution. They will work with you in coming up with a mechanical solution to the problem or bring your idea to life. </p>
  </div>
  </Layout>
)

export default Concepting
