import useCartContext from '@/hooks/useCartContext'

export default function Quantity({ product }) {
  const { addToCart, lessToCart } = useCartContext()
  return (
    <div className='flex gap-x-3 items-center p-2 '>
      {/* decrement */}
      <button
        className='bg-neutral-400 rounded-full'
        onClick={() => lessToCart(product)}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='25'
          height='25'
          viewBox='0 0 32 32'
        >
          <path fill='black' d='M5 15v2h22v-2H5z' />
        </svg>
      </button>
      {/* Number */}
      <span className='text-neutral-100 font-semibold'>{product.quantity}</span>
      {/* Increment */}
      <button
        className='bg-neutral-400 rounded-full'
        onClick={() => addToCart(product)}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='25'
          height='25'
          viewBox='0 0 32 32'
        >
          <path fill='black' d='M17 15V8h-2v7H8v2h7v7h2v-7h7v-2z' />
        </svg>
      </button>
    </div>
  )
}
