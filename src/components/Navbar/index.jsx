import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../image/Logo1.png'
import Cart from '../../image/el_shopping.png'
import ModalCart from '../ModalCart'
// style
import './styles.css'
import { useCart } from '../../hooks/useCart'

export function Navbar() {
  const [isVisibleCart, setIsVisibleCart] = useState(false)

  const {cart} = useCart()
  const cartSize = cart.length;
  
  return (
    <div className="navbar-container">
      <Link className="nav-logo" to="/"><img src={Logo} alt="Logo" style={{ width: 80 }} /></Link>
      <div className="navigation">
        <ul>
          <Link className="nav-logo" to="/">Início</Link>
          <Link className="nav-logo" to="/sobre">Sobre Café</Link>
          <Link className="nav-logo" to="/shop">Shop</Link>
          <button className="login">Login</button>
          <button onClick={() => setIsVisibleCart(!isVisibleCart)} className="button-cart" >
            <img src={Cart} alt="Cart" style={{ width: 35 }} />
            <span>{cartSize}</span>
          </button>

          <ModalCart isVisibleCart={isVisibleCart} />
        </ul>
      </div>

    </div>
  );

}

