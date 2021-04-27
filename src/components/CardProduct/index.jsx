import React from 'react'
import { useCart } from '../../hooks/useCart'
import { FiTrash } from 'react-icons/fi'

import './styles.css'


export function CardProduct({ id, name, amount, preco }) {
  const { updateProductAmount, removeProduct } = useCart()

  return (
    <div className='container-card'>
      <p >{name}</p>
      <div>
        <span>{amount} Uni.</span>
        <section>
          <button onClick={() => updateProductAmount(id, amount + 1)}>+</button>
          <button onClick={() => updateProductAmount(id, amount - 1)}>-</button>
        </section>
      </div>
      <span className="preco">R$ {preco * amount}</span>
      <FiTrash onClick={() => removeProduct(id)} />
    </div>
  )
}