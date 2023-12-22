import Link from 'next/link'
import ArrowUp from '../icons/ArrowUp'
import CheckIcon from '../icons/Check-icon'

export default function FormSucces() {
  return (
    <div className='flex flex-col items-center justify-center gap-y-10 flex-grow relative'>
      <h2 className='text-lg font-semibold text-white underline underline-offset-8 decoration-1 decoration-amber-400'>
        Your product was saved successfully
      </h2>
      <Link
        href='/admin'
        className='bg-neutral-200 px-3 py-1 flex items-center gap-x-2 rounded-3xl'
      >
        <span className='font-semibold text-sm text-neutral-900'>
          Admin panel
        </span>
        <ArrowUp />
      </Link>
      <CheckIcon className='absolute top-0 right-0' />
    </div>
  )
}
