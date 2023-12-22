import Products from '@/components/products/Products'

export async function generateMetadata({ params }) {
  return {
    title: `Products - ${params.category}`,
    description: `Discover a wide selection of ${params.category} comics. Explore the exciting stories and adventures of the Marvel character.`,
    author: 'Marvel Comics'
  }
}

export default function CategoryPage({ params }) {
  const { category } = params
  return <Products category={category} />
}
