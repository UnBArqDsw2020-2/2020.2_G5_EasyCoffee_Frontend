import './style.css'
import React from 'react';

import NavbarAdm from '../../components/NavbarAdm/NavBarAdm'
import NavbarLateral from '../../components/NavbarAdmLateral/NavbarLateral.jsx' 

import Cadastrar from './Cadastrar_prod/CadastrarProduc'
import Pedidos from './Pedido/Pedidos.jsx'


function NavBar() {
  return (
    <>
              <NavbarAdm/>
      <div className='conteiner'>
        <div className="conteiner_center">
          <section>
            <div className="conteiner_esquerdo">
            <NavbarLateral/>
            </div>
            <div className='conteiner_direito'>
              <Pedidos/>
            </div>
          </section>
        </div>
      </div>


    </>

  );
}

export default NavBar;