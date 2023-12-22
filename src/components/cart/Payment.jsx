'use client';
import PaymentInfo from './PaymentInfo';
import { usePayment } from '@/hooks/usePayment';

export default function Payment() {
  const { handleClear } = usePayment();
  return (
    <section className='z-30 bg-neutral-900/80 sm:py-0 py-3 border border-neutral-400  rounded-3xl sm:h-2/3 h-auto sm:w-[25%] w-[95%] flex flex-col items-center justify-around'>
      {/* Title */}
      <h4 className='text-lg font-semibold text-neutral-100'>Order</h4>
      {/* Info */}
      <PaymentInfo />
      {/* Buy */}
      <div className='w-full flex justify-center sm:pt-0 pt-5'>
        <button
          onClick={handleClear}
          className='w-1/3 bg-neutral-100 py-1 rounded-full'
        >
          Buy
        </button>
      </div>
    </section>
  );
}
