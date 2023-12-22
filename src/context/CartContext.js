'use client'
import { useCartReducer } from "@/hooks/useCartReducer";
import { createContext } from "react";

export const CartContext = createContext()


export function CartProvider({ children }) {
    const { state, addToCart, removeFromCart, lessToCart, clearCart, isProductInCart, subTotalPrice } = useCartReducer()
    return (
        <CartContext.Provider
            value={{
                addToCart,
                cart: state,
                clearCart,
                removeFromCart,
                isProductInCart,
                lessToCart,
                subTotalPrice
            }}>
            {children}
        </CartContext.Provider>
    )
}