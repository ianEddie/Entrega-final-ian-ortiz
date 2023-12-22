import ProductPrice from '../cart/ProductPrice'
import LikedButton from './LikedButton'
import ProductDetailButton from './AddToCartButton'
import Image from 'next/image'

export default async function ProductDetail({ slug }) {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || ''

  const apiUrl = new URL(`/products/${slug}`, baseUrl)

  const response = await fetch(apiUrl.toString(), {
    cache: 'no-store'
  })

  const data = await response.json()
  // Return
  return (
    <section className='pt-5 h-screen w-full flex justify-center items-center relative'>
      {/* Background Image */}
      <Image
        priority
        src={product.image}
        alt={product.name}
        width={200}
        height={400}
        className='absolute top-0 right-0 h-full w-full object-cover z-20'
      />
      {/* Background Filter */}
      <div className='absolute z-30 w-full h-full top-0 right-0 bg-gradient-to-b from-neutral-900 from-0% to-transparent to-70% backdrop-blur-[2px] backdrop-brightness-[.4]' />
      {/* Card Detail */}
      <article className='sm:w-[80%] w-[95%] sm:h-[80%] h-[65%] z-30 flex border border-neutral-400 rounded-r-xl bg-neutral-900/80 p-1'>
        {/* Image */}
        <Image
          priority
          src={product.image}
          alt={product.name}
          width={200}
          height={400}
          className='h-full sm:w-auto w-1/2'
        />
        {/* info */}
        <div className=' border-l border-neutral-400 rounded-r-xl flex-grow grid grid-cols-2 p-5 relative'>
          <LikedButton />
          {/* title */}
          <h1 className='col-span-2 text-center text-neutral-100 text-2xl font-semibold flex items-center justify-center'>
            {product.name}
          </h1>
          {/* Writer & Artist */}
          <div className='flex flex-col justify-center items-center gap-y-2'>
            <h2 className='text-neutral-300 text-lg font-semibold underline underline-offset-8 decoration-red-600'>
              Writer
            </h2>
            <h3 className='text-neutral-400 text-sm'>{product.writer}</h3>
          </div>
          <div className='flex flex-col justify-center items-center gap-y-2'>
            <h2 className='text-neutral-300 text-lg font-semibold underline underline-offset-8 decoration-red-600'>
              Artist
            </h2>
            <h3 className='text-neutral-400 text-sm'>{product.artist}</h3>
          </div>
          {/* Description */}
          <p className='col-span-2 text-center pt-5 text-neutral-300 sm:text-base text-sm'>
            {product.description}
          </p>
          {/* Price */}
          <div className='col-span-2 flex justify-center items-start'>
            <ProductPrice>{product.price}</ProductPrice>
          </div>
          {/* Button */}
          <ProductDetailButton product={product} />
        </div>
      </article>
    </section>
  )
}
