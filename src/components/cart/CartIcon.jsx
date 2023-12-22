'use client';

import icon from '@/assets/icons/cart-icon.png';
import Link from 'next/link';
import Image from 'next/image';
import useCartContext from '@/hooks/useCartContext';

export default function CartIcon() {
  const { cart } = useCartContext();

  return (
    <div className='flex relative py-1 w-12'>
      <span className='absolute top-0 right-0 text-sm font-semibold bg-red-600 rounded-full w-5 h-5 flex items-center justify-center'>
        {cart.length}
      </span>
      <Link href='/cart'>
        <Image src={icon} alt='cart' className='w-6 h-6' />
      </Link>
    </div>
  );
}
