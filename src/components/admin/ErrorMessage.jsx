import AlertIcon from '../icons/Alert-icon'

export default function ErrorMessage({ children }) {
  return (
    <p
      role='alert'
      className='absolute text-center w-full bottom-0 flex gap-x-3 justify-center  items-center text-[12px] text-red-400 tracking-wider italic'
    >
      <AlertIcon />
      {children}
    </p>
  )
}
