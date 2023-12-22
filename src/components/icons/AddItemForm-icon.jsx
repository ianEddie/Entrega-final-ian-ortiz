import Link from 'next/link'

export default function AddItemForm() {
  return (
    <Link
      href='/admin/create'
      className='bg-white z-30 rounded-full p-1 fixed sm:bottom-10 bottom-5 sm:right-10 right-5'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='35'
        height='35'
        viewBox='0 0 24 24'
      >
        <path fill='black' d='M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z' />
      </svg>
    </Link>
  )
}
