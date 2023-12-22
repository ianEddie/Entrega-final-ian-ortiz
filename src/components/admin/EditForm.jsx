import CreateItem from './CreateItem'

export default async function EditForm({ slug }) {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || ''

  const apiUrl = new URL(`/products/${slug}`, baseUrl)

  const response = await fetch(apiUrl.toString(), {
    cache: 'no-store'
  })

  const data = await response.json()
  return <CreateItem title='Edit your product' initialValues={product} />
}
