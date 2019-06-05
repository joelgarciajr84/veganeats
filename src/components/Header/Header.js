/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  toggleOpen = () => { 
    this.setState({ open: !this.state.open }) 
  }

  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: Free, open source, & modern CSS framework based on Flexbox" width="112" height="28" />
          </a>

          <a role="button" className={"navbar-burger " + (this.state.open ? 'is-active' : '')} aria-label="menu" aria-expanded="false" onClick={this.toggleOpen}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div className={"navbar-menu " + (this.state.open ? 'is-active' : '')}>
          <div className="navbar-start">
            <a className="navbar-item">Home</a>
            <a className="navbar-item">Restaurants</a>
          </div>
        </div>
      </nav>
    );
  }
}

export default HeaderComponent;