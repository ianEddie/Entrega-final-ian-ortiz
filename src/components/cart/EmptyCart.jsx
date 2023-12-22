import Link from 'next/link';
import FolderIcon from '../icons/Folder-icon';

export default function EmptyCart() {
  return (
    <article className='bg-gradient-to-b from-neutral-950 to-transparent rounded-3xl w-full h-full flex flex-col items-center justify-center gap-y-14'>
      <FolderIcon />
      <div className='flex flex-col items-center gap-y-2 font-semibold'>
        <h1 className='text-xl text-neutral-100'>Your cart is empty</h1>
        <h2 className='text-neutral-400'>Discover our products in the store</h2>
      </div>
      <Link
        href='/products/all'
        className='bg-amber-300 px-3 py-1 rounded-3xl font-semibold text-neutral-900'
      >
        Products
      </Link>
    </article>
  );
}
