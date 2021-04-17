import { createContext, useContext, useState } from "react"
import { toast } from 'react-toastify';
import { api } from "../services/api";

const CartContext = createContext({});

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const storagedCart = localStorage.getItem('@EasyCoffe:cart');
    if (storagedCart) {
      return JSON.parse(storagedCart)
    }
    return []
  })

  async function addProduct(productId) {
    try {
      const updatedCart = [...cart]
      const productExiste = updatedCart.find(product => product.id === productId)
      const productInStock = await api.get(`/products/${productId}`)
      const stockAmount = productInStock.data.quantidade
      const currentAmount = productExiste ? productExiste.amount : 0
      const amount = currentAmount + 1
      if (amount > stockAmount) {
        toast.error('Quantidade solicitada fora de estoque');
        return;
      }
      if (productExiste) {
        productExiste.amount = amount
      } else {
        const product = await api.get(`/products/${productId}`)
        const newProduct = {
          ...product.data,
          amount: 1
        }
        // console.log(newProduct)
        updatedCart.push(newProduct)
      }
      setCart(updatedCart)
      localStorage.setItem('@EasyCoffe:cart', JSON.stringify(updatedCart))
    } catch {
      toast.error('Erro na adição do produto');
    }
  }

  function removeProduct() {
    //Falta
  }

  function updateProductAmount() {
    //Falta
  }

  return (
    <CartContext.Provider value={{ cart, addProduct, removeProduct, updateProductAmount }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  return context
}