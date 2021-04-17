import { useCart } from '../../hooks/useCart'
import Button from '../Button'
import './styles.css'


export default function ModalCart({ isVisibleCart }) {
  const { cart,updateProductAmount,removeProduct } = useCart()
  const total = cart.reduce((sumTotal,product)=>{
    return sumTotal + product.preco* product.amount
  },0)

  return (
    <>
      {isVisibleCart &&
        <div className="container">
          <header>
            Seus prudutos
          </header>
          <main>
            <p>{cart.map(product => (
              <>
                <p key={product.id}>{product.nome} {product.amount}</p>
                <button onClick={() =>updateProductAmount(product.id,product.amount+1)}>+</button>
                <button onClick={() =>updateProductAmount(product.id,product.amount-1)}>-</button>
                <button onClick={() =>removeProduct(product.id)}>excluir</button>
              </>
            ))}</p>
          </main>
          <footer>
            <h3>Total: R${total}</h3>
            <Button name='COMPRAR' />
            <Button name='LIMPAR CARRINHO' />
          </footer>
        </div>
      }
    </>
  )
}