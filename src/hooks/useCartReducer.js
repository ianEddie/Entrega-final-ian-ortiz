'use client'

import { cartReducer, initialState } from "@/context/cartReducer"
import { useReducer } from "react"

export const useCartReducer = () => {

    const [state, dispatch] = useReducer(cartReducer, initialState)

    const addToCart = product => dispatch({
        type: 'ADD_TO_CART',
        payload: product
    })

    const lessToCart = product => dispatch({
        type: 'LESS_TO_CART',
        payload: product
    })

    const removeFromCart = product => dispatch({
        type: 'REMOVE_FROM_CART',
        payload: product
    })

    const clearCart = () => dispatch({ type: 'CLEAR_CART' })

    const isProductInCart = state.length > 0

    const subTotalPrice = state.reduce((acc, product) => acc + product.price * product.quantity, 0)

    return { addToCart, lessToCart, clearCart, removeFromCart, state, isProductInCart, subTotalPrice }

}