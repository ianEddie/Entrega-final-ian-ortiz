export default function FormSubmitButton({ succes }) {
  return (
    <div
      className={`${
        succes ? 'hidden' : 'w-full flex items-center justify-center'
      }`}
    >
      <button
        type='submit'
        className='bg-amber-300 py-[2px] font-semibold text-sm text-neutral-900 px-5 rounded-full '
      >
        Save
      </button>
    </div>
  )
}
