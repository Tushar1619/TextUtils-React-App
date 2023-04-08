import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
export default function Navbar({ title, mode, toggle }) {

  return (
    <nav className={`navbar navbar-expand-lg bg-${mode}`}>
      <div className="container-fluid" >
        <Link className={`navbar-brand text-${mode === 'light' ? 'dark' : 'light'}`} to="/">{title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link active text-${mode === 'light' ? 'dark' : 'light'}`} aria-current="page" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link text-${mode === 'light' ? 'dark' : 'light'}`} to="/">Link</Link>
            </li>

            <li className="nav-item">
              <Link className={`nav-link disabled text-${mode === 'light' ? 'dark' : 'light'}`} to="/">Disabled</Link>
            </li>
          </ul>
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" onClick={toggle} id="flexSwitchCheckDefault" />
            <label className={`form-check-label text-${mode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">Dark mode</label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string
};
Navbar.defaultProps = {
  title: 'Stranger'
};
