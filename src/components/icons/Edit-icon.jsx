import Link from 'next/link'

export default function EditIcon({ slug }) {
  return (
    <Link href={`/admin/edit/${slug}`} rel='preload' as={`/admin/edit/${slug}`}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='25'
        height='25'
        viewBox='0 0 24 24'
      >
        <g
          fill='none'
          stroke='white'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='1.5'
        >
          <path d='M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7' />
          <path d='M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1l1-4l9.5-9.5z' />
        </g>
      </svg>
    </Link>
  )
}
