import CreateItem from './CreateItem'

export default async function EditForm({ slug }) {

 const baseUrl = (process.env.NEXT_PUBLIC_API_BASE_URL || '').replace(/\/$/, '');
  
 const apiUrl = new URL('/api/products/' + slug, baseUrl);
 
 const response = await fetch(apiUrl.toString(), {
  cache: 'no-store'
});
  // localhost:3000
  // ${process.env.VERCEL_URL}
  const product = await response.json()
  return <CreateItem title='Edit your product' initialValues={product} />
}
