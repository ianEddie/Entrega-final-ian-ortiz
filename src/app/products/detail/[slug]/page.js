import ProductDetail from '@/components/products/ProductDetail'

export async function generateMetadata({ params }) {
  return {
    title: `Comic - ${params.slug}`,
    description: `Explore the comic ${params.slug}. Enjoy reading!`,
    author: 'Marvel Comics'
  }
}
export default function DetailPage({ params }) {
  const { slug } = params
  return <ProductDetail slug={slug} />
}
