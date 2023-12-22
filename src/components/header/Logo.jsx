import Image from 'next/image'
import logo from '@/assets/icons/marvelComics-icon.png'
import Link from 'next/link'

export default function Logo() {
  return (
    <Link href='/' className='flex items-center pl-10'>
      <Image src={logo} alt='Marvel comics' className='h-auto w-14' />
    </Link>
  )
}
