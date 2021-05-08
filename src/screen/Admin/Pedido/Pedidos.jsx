// import { Accordion, Card, Col, Row, Button } from 'react-bootstrap'
import { useState, useEffect } from 'react';
import './styles.css'
import truck from "../../../image/truck.png";

function NavBar() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, [])

  async function getData() {
    const result = await fetch('https://60538bd145e4b30017291f4c.mockapi.io/api/v1/orden');
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
    <div>
      {data.map(user => (
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" key={user.id}>
                <div className="accordion" eventKey="1" >
                  <div className="row gx-5">
                    <div className="col">
                      <p>{data_change(user.date_created)}</p>
                    </div>
                    <div className="col">
                      <div className="row gx-5">
                        {user.name}
                      </div>
                      <div className="row gx-5">
                        {user.cidade}
                      </div>
                    </div>
                    <div className="col">{user.total_prod}</div>
                    <div className="col"><img src={truck} /></div>
                  </div>
                </div>
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <div className="row gx-5">
                  <div className="col">
                    <div className="row gx-5">
                      Name
                    <br />
                      {user.name}
                    </div>
                    <div className="row gx-5">
                      <div className='card' style={{ width: '100rem' }}>
                        <div class="card-body">
                          <div className="row">
                            <div className="col">
                              <h6>CEP</h6>
                              <p>75478755</p>
                            </div>
                            <div className="col">
                              <h6>Endereço</h6>
                              <p>{user.endereco}</p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col">
                              <h6>Estado:</h6>
                              <p>{user.cidade}</p>
                            </div>
                            <div className="col">
                              <h6>Bairro:</h6>
                              <p>aaaa</p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col">
                              <h6>Cidade:</h6>
                              <p>{user.estado}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div xs={6} className="col colun_info_right">
                    <h4>Produtos</h4>
                    <div className="row">
                      <div className="col"><p>{user.product}</p></div>
                      <div className="col"><p>{user.qprodt}</p></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default NavBar;