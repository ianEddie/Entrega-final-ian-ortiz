'use client'
import Image from 'next/image'
import Quantity from './Quantity'
import { DeleteIcon } from './DeleteIcon'
import ProductPrice from './ProductPrice'
import useCartContext from '@/hooks/useCartContext'

export default function ProductCard({ product }) {
  const { removeFromCart } = useCartContext()
  const handleRemove = () => {
    removeFromCart(product)
  }
  const subTotal = Math.trunc(product.price * product.quantity)
  return (
    <article className='w-full h-auto bg-neutral-900/80 border border-neutral-600 flex justify-between items-center sm:pr-10 pr-3 pl-1 py-1 rounded-r-xl relative'>
      <div className='bg-red-300'>
        <Image
          src={product.image}
          width={100}
          height={100}
          alt='product Image'
          className='sm:w-24 w-20 h-auto'
        />
      </div>
      <h2 className='sm:text-lg text-[12px] text-neutral-100 font-semibold  underline underline-offset-8 decoration-red-900 decoration-[.5px]'>
        {product.name}
      </h2>
      <Quantity product={product} />
      <ProductPrice>{subTotal}</ProductPrice>
      <button className='absolute top-2 right-2' onClick={handleRemove}>
        <DeleteIcon />
      </button>
    </article>
  )
}
