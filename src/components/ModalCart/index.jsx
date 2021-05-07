import { useCart } from '../../hooks/useCart'
import Button from '../Button'
import { CardProduct } from '../CardProduct'
import { Link } from 'react-router-dom'
import './styles.css'


export default function ModalCart({ isVisibleCart }) {
  const { cart, updateProductAmount, removeProduct } = useCart()
  const total = cart.reduce((sumTotal, product) => {
    return sumTotal + product.preco * product.amount
  }, 0)

  return (
    <>
      {isVisibleCart &&
        <div className="container">
          <header>
            Seus prudutos
          </header>
          <main>
            <p>{cart.map(product => (
              <CardProduct
                id={product._id}
                name={product.nome}
                amount={product.amount}
                preco={product.preco}
              />
            ))}
            </p>
          </main>
          <footer>
            <h3>Total: R${total}</h3>
            <Link className="aprede" to="/checkout"><Button name='COMPRAR' /></Link>

            <Button name='LIMPAR CARRINHO' />
          </footer>
        </div>
      }
    </>
  )
}