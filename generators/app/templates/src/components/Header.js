import React from 'react'
import logo from '../assets/logo.svg'

function Header() {
  return (
    <header>
      <img src={logo} className="redux-logo" alt="logo" />
      <h2>Welcome to Redux</h2>
    </header>
  )
}

export default Header
