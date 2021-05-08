import coffee from '../../image/coffee.png'
import truck from '../../image/truck.png'
import list from '../../image/el_list-alt.png'
import React from 'react';

import  './NavbarLateral.css'


function NavBar() {
  return (
    <>
      <div>
      <ul className="nav flex-column">
      
         <li className="nav-item">
           
           <a className="nav-link active" aria-current="page" href="#"><img src={coffee}/>Cadastrar</a>
         </li>
         <li className="nav-item">
           
           <a className="nav-link active" aria-current="page" href="#"><img src={truck}/>Pedidos</a>
        </li>
        <li className="nav-item">
           
           <a className="nav-link active" aria-current="page" href="#"><img src={list}/>Listar Produtos</a>
        </li>
      </ul>
      </div>
    </>
  );
}

export default NavBar;