import { useState, useEffect } from 'react';

import cart from "../../image/el_shopping.png";


function ProductShop(){
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, [])

  async function getData() {
    const result = await fetch('https://60538bd145e4b30017291f4c.mockapi.io/api/v1/product');
    console.log(result);
    const getResult = await result.json();
    setData(getResult)
    console.log(getResult);
  }

  const data_change = function (date_data) {

    const currentTime = new Date(date_data);
    const month = currentTime.getMonth() + 1;
    const day = currentTime.getDate();
    const year = currentTime.getFullYear();
    const date_expiration = day + "/" + month + "/" + year;
    return date_expiration;
  }



  return (
    <>

      <div>
        {data.map(user => (
          <div class="card">
            <div class="card-body">
     

              <div className="row gx-5">
                <div className="col">
                  <h5>{user.nome}</h5>
                </div>
                <div className="col">
                  <strong>R$ {user.preco}</strong>
                </div>
               
              </div>
              <div className="row gx-5">
                <div className="col">
                  {user.descricao}
                </div>
                <div className="col">
                  <img src={cart} alt=""/>
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