import Image from 'next/image'
import icon from '@/assets/icons/marvelComics-icon.png'

export default function Price({ price, day, month }) {
  return (
    <div className='bg-amber-400 border-r-2 border-b-2 border-black w-[30%] h-1/3 pt-1 flex flex-col items-center justify-between absolute top-0 left-0'>
      <Image src={icon} alt='image' className='w-16 h-auto' />
      <div className='bg-red-300 w-full text-center border-t-2 border-black'>
        <h3 className='bg-neutral-100 '>${price} U.S</h3>
        <h4 className='bg-neutral-100 flex flex-col border-t-2 border-black'>
          {day} <br /> {month}
        </h4>
      </div>
    </div>
  )
}
