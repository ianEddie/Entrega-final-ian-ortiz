import CreateItem from './CreateItem'

export default async function EditForm({ slug }) {
  const baseUrl = process.env.API_ENDPOINT || 'http://localhost:3000'

  const response = await fetch(`${baseUrl}/api/detail/${slug}`, {
    cache: 'no-store'
  })

  const product = await response.json()
  return <CreateItem title='Edit your product' initialValues={product} />
}
