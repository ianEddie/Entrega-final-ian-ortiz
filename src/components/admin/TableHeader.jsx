const titles = [
  { id: 1, title: 'Image' },
  { id: 2, title: 'Name' },
  { id: 3, title: 'Category' },
  { id: 4, title: 'Description' },
  { id: 5, title: 'Edit' },
  { id: 6, title: 'Delete' }
]
export default function TableHeader() {
  return (
    <header className='w-full sticky z-10 top-0 right-0 border-b border-neutral-500'>
      <ul className='w-full bg-neutral-900 grid grid-cols-6 p-3'>
        {titles.map((item) => (
          <h2
            key={item.id}
            className='flex items-center justify-center text-neutral-100 font-semibold sm:text-base text-[12px]'
          >
            {item.title}
          </h2>
        ))}
      </ul>
    </header>
  )
}
