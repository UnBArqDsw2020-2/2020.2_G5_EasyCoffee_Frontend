import { CardProduct } from '../../components/CardProduct';
import Button from '../../components/Button'
import { useCart } from '../../hooks/useCart';
import img_top from '../../image/coffee-4053246_1920 1.png'
import './style.css'



export default function Checkout() {

  const { cart } = useCart()
  const total = cart.reduce((sumTotal, product) => {
    return sumTotal + product.preco * product.amount
  }, 0)
  const Freet = cart.reduce((sumTotal, product) => {
    return sumTotal + 1
  }, 0)

  const Total = total + Freet


  return (
    <div className="conteiner-checkout">
      <img src={img_top} />
      <h2>Checkout</h2>
      <main>
        <h3>Seu Pedido</h3>
        <h4>Detalhes De Cobrança</h4>

        <div className="conteiner-form">
          <form>

            <div className="row">
              <div className="col">
                <div className="mb-3">
                  <label for="nome" className="form-label">Nome</label>
                  <input type="nome" className="form-control" id="nome" />
                </div>
              </div>
              <div className="col">
                <div className="mb-3">
                  <label for="sobrenome" className="form-label">Sobrenome</label>
                  <input type="sobrenome" className="form-control" id="sobrenome" aria-describedby="emailHelp" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="mb-3">
                  <label for="estado" className="form-label">Estado</label>
                  <input type="estado" className="form-control" id="estado" />
                </div>
              </div>
              <div className="col">
                <div className="mb-3">
                  <label for="cep" className="form-label">Cep</label>
                  <input type="cep" className="form-control" id="cep" aria-describedby="emailHelp" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="mb-3">
                  <label for="endereco" className="form-label">Endereço</label>
                  <input type="endereco" className="form-control" id="endereco" />
                </div>
              </div>
              <div className="col">
                <div className="mb-3">
                  <label for="numero" className="form-label">Numero</label>
                  <input type="numero" className="form-control" id="numero" aria-describedby="emailHelp" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="mb-3">
                  <label for="telefone" className="form-label">Telefone/Celular</label>
                  <input type="telefone" className="form-control" id="telefone" />
                </div>
              </div>
              <div className="col">
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="conteiner-ck-proc">

              <div className="product-ck">
                <div className="row titel-prodcut">
                  <div className="col-sm">
                    Produto
                  </div>
                  <div className="col-sm">
                    Unid
                  </div>
                  <div className="col-sm">
                    Preço
                   </div>
                </div>

                {cart.map(product => (
                  <>
                    <div key={product.id} className="card conteiner-list-produc">
                      <div className="card-body-list-product ">
                        <div className="row gx-5">
                          <div className="col prod-nome">
                            {product.nome}
                          </div>
                          <div className="col prod-uni">
                            {product.amount} Uni
                          </div>
                          <div className="col prod-preco">
                            R$ {product.preco}
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
                <div className="total-valor">
                  <div className="row ">
                    <div className="col-sm">
                      Subtotal
                    </div>
                    <div className="col-sm">
                      {total}
                    </div>
                  </div>

                  <div className="row ">
                    <div className="col-sm">
                      Taxa Freet
                    </div>
                    <div className="col-sm">
                      {Freet}

                    </div>
                  </div>
                  <hr className="solid" />
                  <div className="row ">
                    <div className="col-sm">
                      Total
                    </div>
                    <div className="col-sm">
                      {Total}

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Button name='Efetuar Pagamento' />
          </form>
        </div>
      </main>
    </div>
  );
}