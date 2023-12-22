'use client'
import { usePayment } from '@/hooks/usePayment'
import ProductPrice from './ProductPrice'
import useCartContext from '@/hooks/useCartContext'

export default function PaymentInfo() {
  const { handleClear, subTotal, totalPrice, shipping } = usePayment()
  const { isProductInCart } = useCartContext()
  return (
    <div className='w-full flex flex-col items-center gap-y-5'>
      {/* Subtotal */}
      <div className='flex w-2/3 justify-between '>
        <h5 className='font-semibold text-neutral-100'>Subtotal</h5>
        <ProductPrice>{subTotal}</ProductPrice>
      </div>
      {/* Shipping */}
      <div className='flex w-2/3 justify-between'>
        <h6 className='font-semibold text-neutral-100'>Shipping</h6>
        <ProductPrice>
          {isProductInCart ? shipping : <span>0</span>}
        </ProductPrice>
      </div>
      {/* Total */}
      <div className='flex w-2/3 justify-between'>
        <h6 className='font-semibold text-neutral-100'>Total</h6>
        <ProductPrice>
          {isProductInCart ? totalPrice : <span>0</span>}
        </ProductPrice>
      </div>
      {/* Clear Cart */}
      <button
        className='bg-neutral-100 rounded-full py-1 px-3 font-semibold mt-3'
        onClick={handleClear}
      >
        Clear cart
      </button>
    </div>
  )
}
