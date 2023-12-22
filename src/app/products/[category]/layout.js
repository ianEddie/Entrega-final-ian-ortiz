import Categories from '@/components/header/Categories'
import style from './layout.module.css'
import { Suspense } from 'react'
import Loader from '@/components/icons/Loader'

export default function ProductLayout({ children }) {
  return (
    <main
      className={`${style.section} flex flex-col min-h-screen pt-12 relative gap-y-8`}
    >
      <div className={`${style.filter}`} />
      <Categories />
      <Suspense fallback={<Loader className='h-screen' />}>{children}</Suspense>
    </main>
  )
}
