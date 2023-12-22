export default function ProductPrice({ children }) {
  return (
    <h4 className='font-semibold flex items-stretch gap-x-1'>
      <span className='text-sm text-green-400 self-center'>$</span>
      <span className='text-neutral-100'>{children}</span>
      <span className='text-sm text-yellow-400'>us</span>
    </h4>
  );
}
