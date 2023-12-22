import AddItemForm from '../icons/AddItemForm-icon'
import TableBody from './TableBody'
import TableHeader from './TableHeader'

export default function Table() {
  return (
    <section className='z-30 sm:w-[80%] w-[95%] h-[85%] sm:text-base text-sm flex flex-col overflow-y-scroll relative rounded-3xl border border-neutral-500'>
      <TableHeader />
      <TableBody />
      <AddItemForm />
    </section>
  )
}
