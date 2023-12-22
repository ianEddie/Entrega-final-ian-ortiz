import Link from 'next/link'
import style from './hero.module.css'
import ArrowUp from '../icons/ArrowUp'

export default function Hero() {
  return (
    <main
      className={`${style.hero} h-screen w-full flex flex-col items-center justify-center  gap-y-10 relative`}
    >
      <div className={style.filter} />
      <div className='z-10 flex flex-col items-center gap-y-5 w-full'>
        <h1 className='text-[3em] font-semibold z-10  text-neutral-100 underline  decoration-1 decoration-amber-400 underline-offset-8'>
          Welcome to Marvel Comics
        </h1>
        <h2 className='z-10 text-xl underline font-semibold decoration-slice decoration-1 decoration-red-700 underline-offset-8 text-amber-400'>
          The best comics in the world
        </h2>
        <h3 className='z-10 text-neutral-200 font-semibold'>
          Explore the store and enjoy
        </h3>
      </div>
      <Link
        href='/products/all'
        className='z-10 absolute right-5 bottom-5 py-1 flex px-3 gap-x-3 items-center text-neutral-900 font-semibold justify-around bg-neutral-100 rounded-3xl'
      >
        <span>See all products</span>
        <ArrowUp />
      </Link>
    </main>
  )
}
