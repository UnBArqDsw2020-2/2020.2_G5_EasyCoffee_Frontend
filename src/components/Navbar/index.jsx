import react from 'react'
import Logo from '../../image/Logo1.png'
import Cart from '../../image/el_shopping.png'
// style
import './styles.css'

import Home from '../../screen/Home/home'

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
        <a className="nav-logo"  href="/"><img  src={Logo} alt="Logo" style={{width:80}}/></a>
          <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" ></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav me-auto mb-2 mb-lg-2">
              
              </ul>
              
              <div className="d-flex">
              <ul className="navbar-nav me-auto mb-2 mb-lg-2">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Início</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/sobre">Sobre Café</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/shop">Shop</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/signin">Fazer login</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/signup">Criar conta</a>
                </li>
                <li className="nav-item">
                  <img src={Cart} alt="Cart" style={{width:35}}/>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );

}

export default Navbar;