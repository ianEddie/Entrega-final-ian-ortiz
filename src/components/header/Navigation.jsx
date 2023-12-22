'use client'
import Link from 'next/link'
import CartIcon from '../cart/CartIcon'
import useAuthContext from '@/hooks/useAuthContext'

export default function Navigation({ className }) {
  const { logoutUser, user } = useAuthContext()
  const isUserConected = user.logged === true
  return (
    <nav className={className}>
      <Link href='/' >Home</Link>
      <Link href='/products/all'>Products</Link>
      {isUserConected ? (
        <div className=' gap-x-3 gap-y-10 flex sm:flex-row flex-col'>
          <Link href='/admin'>Admin</Link>
          <button onClick={logoutUser}>Logout</button>
        </div>
      ) : (
        <div className='flex items-center gap-x-3'>
          <Link href='/admin'>Login</Link>
        </div>
      )}
      <CartIcon />
    </nav>
  )
}
