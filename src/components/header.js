import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <nav>
      <ul>
        <li><Link className="navLinks" to="/">Home</Link></li>
        <li><Link className="navLinks" to="/concepting/">Concepting</Link></li>
        <li><Link className="navLinks" to="/designing/">Designing</Link></li>
        <li><Link className="navLinks" to="/prototyping/">Prototyping</Link></li>
        <li><Link className="navLinks" to="/3dprinting/">3d Printing</Link></li>
      </ul>
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
