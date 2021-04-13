import { useState, useEffect } from 'react';
import api from '../../api'
import cart from "../../image/el_shopping-cart-sign.png";
import './styles.css'


function ProductShop(){
  const [data, setData] = useState([]);

  
  useEffect(() => {
    getData();
  }, [])

  async function getData() {
    const {data: getResult} = await api.get('/product')
    setData(getResult)
    console.log(getResult);
  }





  return (
    <>  

      <div>
        {data.map(user => (
          <div class="card conteiner-list-produc">
            <div class="card-body-list-product ">
     

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
                    size='small'
                    disableElevation
                    variant='contained'
                    // onClick={() => addToCart(user)}
                  >
                  <img src={cart} alt=""/>
                   </button>
                </div>
                </div >
              </div>
             
  
          </div>
        ))}
      </div>

    </>

  )
}

export default ProductShop;