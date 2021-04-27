import { useState, useEffect } from 'react';
import {api} from '../../services/api'

import './styles.css'

import cart from "../../image/el_shopping-cart-sign.png";
import { useCart } from '../../hooks/useCart';


export function ShopProduct() {
  const [data, setData] = useState([]);
  const {addProduct} = useCart()

  async function getData() {
    const { data: getResult } = await api.get('/products')
    setData(getResult)
  }

  useEffect(() => {
    getData();
  }, [])






  return (
      <div>
        {data.map(user => (
          <div key={user.id} className="card conteiner-list-produc">
            <div className="card-body-list-product ">


              <div className="row gx-5">
                <div className="col prod-nome">
                  <h5>{user.nome}</h5>
                </div>
                <div className="col prod-preco">
                  <strong>R$ {user.preco}</strong>
                </div>

              </div>

              <div className="row gx-5">
                <div className="col prod-descri">
                  {user.descricao}
                </div>
                <div className="col prod-img-cart">
                  <button
                    type="button"
                    onClick={() => addProduct(user.id)}
                  >
                    <img src={cart} alt="carrinho" />
                  </button>
                </div>
              </div >

            </div>


          </div>
        ))}
      </div>

  )
}

