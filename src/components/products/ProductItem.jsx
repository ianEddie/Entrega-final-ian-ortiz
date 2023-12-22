import Image from 'next/image'
import Price from './Price'
import Link from 'next/link'

export default function ProductItem({ data }) {
  return (
    <Link
      href={`/products/detail/${data.slug}`}
      rel='preload'
      as={`/products/detail/${data.slug}`}
    >
      <div className='bg-neutral-900 shadow-xl shadow-neutral-900/40 border border-neutral-500 p-1 flex flex-col items-center text-center rounded-b-3xl relative z-20'>
        <div className='relative w-full border-b border-b-neutral-700'>
          <Image
            priority
            src={data.image}
            alt='image'
            width={200}
            height={300}
            className='w-full brightness-[.8] aspect-[9/14]'
          />
          <div className='absolute w-full h-full top-0 right-0 bg-gradient-to-t from-neutral-900 from-0% to-transparent to-40%'></div>
          <Price price={data.price} day={data.day} month={data.month} />
        </div>
        <div className='px-2 py-3 w-full h-16 flex items-center justify-center text-center'>
          <h2 className='text-neutral-100 font-semibold text-[15px] '>
            {data.name}
          </h2>
        </div>
      </div>
    </Link>
  )
}
