'use client'
import ProductCard from './ProductCard'
import useCartContext from '@/hooks/useCartContext'
import EmptyCart from './EmptyCart'

export default function ProductList() {
  const { cart, isProductInCart } = useCartContext()
  return (
    <section className='z-30 bg-neutral-100/10 border border-neutral-500 px-3 sm:h-[80%] h-[60%] sm:w-[70%] w-[95%] flex flex-col items-center py-3 gap-y-3 rounded-3xl overflow-auto'>
      {isProductInCart ? (
        cart.map((product) => (
          <ProductCard product={product} key={product.slug} />
        ))
      ) : (
        <EmptyCart />
      )}
    </section>
  )
}
