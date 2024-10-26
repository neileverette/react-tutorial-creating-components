import React from 'react';
import logo from '../logo.svg'; // Adjust the path to import logo correctly

function Header() {
  return (
    <header>
      <h1>This is my awesome React Header</h1>
      <p>This is my test React Component app</p>
      <img src={logo} alt='Logo' />
    </header>
  );
}

export default Header;
