import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import SmallLogo from './smallLogo'

const Header = ({ siteTitle }) => (
  <header>
    <nav>
      <div className='navBar'>
        <div className='navLogo'>
          <span><Link className="navLinks" to="/"><SmallLogo /></Link></span>
        </div>
        <span><Link className="navLinks" to="/concepting/">Concepting</Link></span>
        <span><Link className="navLinks" to="/designing/">Designing</Link></span>
        <span><Link className="navLinks" to="/prototyping/">Prototyping</Link></span>
        <span><Link className="navLinks" to="/3dprinting/">3d Printing</Link></span>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
