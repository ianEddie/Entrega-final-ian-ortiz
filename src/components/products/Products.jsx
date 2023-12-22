import ProductItem from './ProductItem'

export default async function Products({ category }) {

  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || ''

  const apiUrl = new URL(`/products/${category}`, baseUrl)

  const response = await fetch(apiUrl.toString(), {
    cache: 'no-store'
  })

  const data = await response.json()
  return (
    <section className='w-full grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-10 px-10 pb-10'>
      {data.map((info) => (
        <ProductItem data={info} key={info.slug} />
      ))}
    </section>
  )
}
