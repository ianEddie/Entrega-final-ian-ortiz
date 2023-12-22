import Link from 'next/link'

const categories = [
  {
    id: 1,
    label: 'Silver'
  },
  {
    id: 2,
    label: 'Spiderman'
  }
]

export default function Categories() {
  return (
    <nav className='text-white flex sticky top-0 z-50 p-2 w-full justify-center items-center gap-x-5'>
      {categories.map(({ label, id }) => (
        <Link
          key={id}
          href={`/products/${label}`}
          className='text-[15px] font-semibold text-neutral-200 underline underline-offset-8 decoration-1 decoration-amber-500'
        >
          {label}
        </Link>
      ))}
    </nav>
  )
}
