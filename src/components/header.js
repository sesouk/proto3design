import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import SmallLogo from './smallLogo'

const Header = ({ siteTitle }) => (
  <header>
        <div className='logo'>
          <span><Link className="logo__link" to="/"><SmallLogo /></Link></span>
        </div>
    <nav>
      <div className='nav'>
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
