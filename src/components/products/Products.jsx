import ProductItem from './ProductItem'

export default async function Products({ category }) {
  const baseUrl = process.env.API_ENDPOINT || 'http://localhost:3000'

  const response = await fetch(`${baseUrl}/api/products/${category}`, {
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
