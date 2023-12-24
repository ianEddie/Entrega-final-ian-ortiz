'use client'
import { useEffect, useState } from 'react'
import TableItem from './TableItem'
import Loader from '../icons/Loader'

export default function TableBody() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const baseUrl = process.env.API_ENDPOINT || 'http://localhost:3000'

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${baseUrl}/api/products/all`, {
          cache: 'no-store'
        })
        const productsData = await response.json()
        setProducts(productsData)
        setLoading(false)
      } catch (error) {
        console.error('Error getting product list', error)
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const onDelete = (deletedSlug) => {
    // Filtra los productos para mantener solo aquellos que no se han eliminado
    const updatedProducts = products.filter(
      (product) => product.slug !== deletedSlug
    )
    setProducts(updatedProducts)
  }

  return (
    <article className='bg-neutral-100/10 w-full flex flex-col h-full gap-3 p-3'>
      {!loading ? (
        products.map((product) => (
          <TableItem {...product} key={product.slug} onDelete={onDelete} />
        ))
      ) : (
        <Loader className='h-full' />
      )}
    </article>
  )
}
