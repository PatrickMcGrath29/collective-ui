import React, { Component } from 'react'

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mobileHidden: true,
    }
  }

  toggleMobileNav = () => {
    this.setState({ mobileHidden: !this.state.mobileHidden })
  }

  render() {
    return (
      <header role="banner" className="header">
        <a className="header-icon" href="/">
          Collective App
        </a>
        <div
          className="navbar-collapse-toggle hamburger"
          onClick={this.toggleMobileNav}
        >
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
        </div>
        <nav
          className={`navbar ${this.state.mobileHidden ? 'mobile-hidden' : ''}`}
        >
          <a href="/" className="navbar-link">
            Home
          </a>
        </nav>
      </header>
    )
  }
}

export default Header
