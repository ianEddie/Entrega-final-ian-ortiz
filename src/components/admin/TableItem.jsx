'use client'
import Image from 'next/image'
import EditIcon from '../icons/Edit-icon'
import DeleteIcon from '../icons/DeleteItemForm-icon'
import useFirebaseForm from '@/hooks/useFirebaseForm'

export default function TableItem({
  image,
  name,
  description,
  category,
  slug,
  onDelete
}) {
  const { deleteProduct } = useFirebaseForm()
  const handleDelete = async () => {
    try {
      await deleteProduct(slug)
      console.log('Product deleted')
      onDelete(slug)
    } catch (error) {
      console.error('Error when deleting product', error)
    }
  }
  return (
    <div className='bg-neutral-900/80 border border-neutral-600 grid grid-cols-6 rounded-r-xl text-center relative'>
      <Image
        priority
        alt={name}
        src={image}
        height={100}
        width={100}
        className='sm:h-32 h-24 w-auto justify-self-start'
      />
      <h2 className='flex items-center justify-center font-semibold text-neutral-300 sm:text-base text-[10px]'>
        {name}
      </h2>
      <h3 className='flex items-center justify-center font-semibold text-neutral-300'>
        {category}
      </h3>
      <p className='max-w-xs overflow-hidden whitespace-nowrap overflow-ellipsis flex items-center justify-center text-neutral-300 text-sm'>
        {description}
      </p>
      <div className='flex items-center justify-center'>
        <EditIcon slug={slug} />
      </div>
      <div className='flex items-center justify-center'>
        <DeleteIcon slug={slug} onClick={handleDelete} />
      </div>
    </div>
  )
}
