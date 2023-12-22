import Image from 'next/image'
import icon from '@/assets/icons/loader-icon.png'

export default function Loader({ className }) {
  return (
    <div className={`${className} w-full flex justify-center items-center`}>
      <Image
        priority
        src={icon}
        alt='loader'
        width={100}
        height={100}
        className={`w-16 h-auto z-40 animate-spin`}
      />
    </div>
  )
}
