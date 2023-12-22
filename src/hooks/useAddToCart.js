'use client'

import useCartContext from "./useCartContext"

export const useAddToCart = () => {
    const { addToCart } = useCartContext()
    const handleAdd = (product) => {
        addToCart({ ...product })
    }
    return { handleAdd }
}