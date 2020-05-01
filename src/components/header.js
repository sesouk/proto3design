import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import SmallLogo from './smallLogo'

const Header = ({ siteTitle }) => (
  <header>
    <nav>
      <div className='nav'>
        <div className='nav__logo'>
          <span><Link className="nav__logo--link" to="/"><SmallLogo /></Link></span>
        </div>
        <span className='nav__holder'><Link className="nav__holder--link" to="/concepting/">Concepting</Link></span>
        <span className='nav__holder'><Link className="nav__holder--link" to="/designing/">Designing</Link></span>
        <span className='nav__holder'><Link className="nav__holder--link" to="/prototyping/">Prototyping</Link></span>
        <span className='nav__holder'><Link className="nav__holder--link" to="/3dprinting/">3d Printing</Link></span>
        <span className='nav__holder'><Link className="nav__holder--link" to="/contact/">Contact</Link></span>
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
