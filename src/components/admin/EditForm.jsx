import CreateItem from './CreateItem'

export default async function EditForm({ slug }) {
  const baseUrl = NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000'

  const response = await fetch(`${baseUrl}/api/detail/${slug}`, {
    cache: 'no-store'
  })
  const product = await response.json()
  return <CreateItem title='Edit your product' initialValues={product} />
}
