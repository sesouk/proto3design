import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <div className='bodyContainer'>
    <h1 className='title'>Feel free to contact us with any questions!</h1>
      <form className='contact' name="contact" method="post" action="/contact" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact"/>
        <div className='contact__holder'>
          <div className='contact__holder--label'>Full Name</div>
          <input className='contact__holder--input' type="text" name="name" required/>
        </div>
        <div>
          <div className='contact__holder--label'>Contact #</div>
          <input className='contact__holder--input' type="tel" name="phone" required/>
        </div>
        <div>
          <div className='contact__holder--label'>Email Address</div>
          <input className='contact__holder--input' type="email" name="email" required/>
        </div>
        <div>
          <div className='contact__holder--label'>Any Additional Info?</div>
          <textarea className="contact__holder--addInfo" type="text" name="details" />
        </div>
        <div className="contact__btnHldr">
          <button type="submit" className="contact__btnHldr--btn">Send</button>
        </div>
       </form>
       </div> 
  </Layout>
)

export default Contact
