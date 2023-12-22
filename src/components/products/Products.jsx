import ProductItem from './ProductItem'

export default async function Products({ category }) {
  const response = await fetch(
    `https://${process.env.VERCEL_URL}/products/${category}`,
    {
      cache: 'no-store'
    }
  )
  // ${process.env.VERCEL_URL}
  const data = await response.json()
  return (
    <section className='w-full grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-10 px-10 pb-10'>
      {data.map((info) => (
        <ProductItem data={info} key={info.slug} />
      ))}
    </section>
  )
}
