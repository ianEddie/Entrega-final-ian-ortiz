

import useCartContext from "./useCartContext"

export const usePayment = () => {
    const { subTotalPrice, clearCart } = useCartContext()

    // Clear cart
    const handleClear = () => {
        clearCart();
    };
    // SubTotal price
    const subTotal = Math.trunc(subTotalPrice);
    // Generate a rondom number for shipping
    const shipping = Math.trunc(Math.random() * 10 + 10)

    // Total price
    const totalPrice = Math.trunc(shipping + subTotal);
    //
    return { handleClear, subTotal, totalPrice, shipping }
}