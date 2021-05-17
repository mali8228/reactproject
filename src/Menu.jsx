import React from 'react';
import {NavLink} from 'react-router-dom';
const Menu = () =>{
    return (<>
    
    <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid">
    <NavLink className="navbar-brand color-change" to="/">My Web</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink exact activeClassName='active_menu' className="nav-link" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName='active_menu' className="nav-link" to="about">About US</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName='active_menu' className="nav-link" to="contact">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName='active_menu' className="nav-link" to="service">Service</NavLink>
        </li>
        </ul>
    </div>
  </div>
</nav>  
    </>)
}


export default Menu;