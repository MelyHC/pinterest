import React from 'react';
import logo from '../img/pinterest-logo.png';


const Header = () => {
  return (
    <header className="d-flex align-items-center p-2 mb-3 border-bottom ixed-top bg-white">
      <img src={logo} className="logo m-2" alt="logo-pinterest" />
      <form className="m-2"><i></i><input placeholder="Buscar" /></form>
    </header>
  )
}

export default Header;