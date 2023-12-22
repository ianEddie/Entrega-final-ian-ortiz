import Image from 'next/image'
import icon from '@/assets/icons/loader2-icon.png'

export default function LoaderTwo({ className, width }) {
  return (
    <div className={className}>
      <Image
        priority
        src={icon}
        alt='loader'
        width={100}
        height={100}
        className={`h-auto z-40 animate-spin ${width}`}
      />
    </div>
  )
}
