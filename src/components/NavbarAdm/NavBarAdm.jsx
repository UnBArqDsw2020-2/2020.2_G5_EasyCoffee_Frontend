import React from 'react';

import './styles.css';
import Logo from '../../image/Logo1.png';
import Logo1 from '../../image/el_shopping.png'

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-light Navbar">
        <div className="container-fluid">
         <img src={Logo} alt="image not found" height={80} width={80}/>
        
          <a className="nav-out"  href="#">Logout</a>
     
        </div>
      </nav>
    </>

  );
}

export default NavBar;