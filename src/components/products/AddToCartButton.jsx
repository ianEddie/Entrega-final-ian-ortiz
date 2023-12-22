'use client'
import CheckIcon from '../icons/Check-icon'
import AddButton from '../icons/AddToCart-icon'
import { useAddToCart } from '@/hooks/useAddToCart'
import useCartContext from '@/hooks/useCartContext'

export default function AddToCartButton({ product }) {
  const { cart } = useCartContext()
  const { handleAdd } = useAddToCart()

  const productInCart = (product) => {
    return cart.some((item) => item.slug === product.slug)
  }
  const isProductInCart = productInCart(product)

  return (
    <div className='col-span-2 flex justify-center items-start transition-all duration-300'>
      <button
        className='transition-all duration-300'
        onClick={() => {
          isProductInCart ? null : handleAdd(product)
        }}
      >
        {isProductInCart ? <CheckIcon /> : <AddButton />}
      </button>
    </div>
  )
}
