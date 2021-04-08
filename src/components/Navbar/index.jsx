import React, { useState } from 'react'
import Logo from '../../image/Logo1.png'
import Cart from '../../image/el_shopping.png'
import ModalCart from '../ModalCart'
// style
import './styles.css'

function Navbar() {
  const [isVisibleCart, setIsVisibleCart] = useState(false)
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="nav-logo" href="/"><img src={Logo} alt="Logo" style={{ width: 80 }} /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
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

                <li className="nav-item cart">
                  <button onClick={() => setIsVisibleCart(!isVisibleCart)} className="button-cart" >
                    <img src={Cart} alt="Cart" style={{ width: 35 }} />
                  </button>
                  <ModalCart isVisibleCart={isVisibleCart} />
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