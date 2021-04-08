import Button from '../Button'
import './styles.css'


export default function ModalCart({ isVisibleCart }) {
  return (
    <>
      {isVisibleCart &&
        <div className="container">
          <header>
            Seus prudutos
          </header>
          <main>
            <p>Produosdddddddddddddd</p>
          </main>
          <footer>
            <h3>Total: R$99</h3>
            <Button name='COMPRAR'/>
            <Button name='LIMPAR CARRINHO'/>
          </footer>
        </div>
      }
    </>
  )

}