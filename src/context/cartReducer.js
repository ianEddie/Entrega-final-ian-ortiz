
export const initialState = []

export const cartReducer = (state, action) => {

    const { type: actionType, payload: actionPayload } = action

    switch (actionType) {
        // ADD TO CART
        case 'ADD_TO_CART': {
            const { slug } = actionPayload
            // Product cart index
            const productIndex = state.findIndex(item => item.slug === slug)
            // If product is in cart increase quantity
            if (productIndex >= 0) {
                const newState = structuredClone(state)
                newState[productIndex].quantity += 1
                return newState
            }
            // If product is not in cart add product with qty 1
            return [
                ...state,
                {
                    ...actionPayload,
                    quantity: 1
                }
            ]
        }
        // LESS TO CART
        case 'LESS_TO_CART': {
            const { slug } = actionPayload
            // Product cart index
            const productIndex = state.findIndex((item) => item.slug === slug)
            // If product is in cart decrease quantity
            if (productIndex >= 0) {
                const newCart = structuredClone(state)
                if (newCart[productIndex].quantity > 1) {
                    newCart[productIndex].quantity -= 1
                    return newCart
                }
                // Else set qty to 1
                else {
                    newCart[productIndex].quantity = 1
                    return newCart
                }
            }
        }
        // REMOVE PRODUCT FROM CART
        case 'REMOVE_FROM_CART': {
            const { slug } = actionPayload
            return state.filter((item) => item.slug !== slug)
        }
        // CLEAR ALL CART
        case 'CLEAR_CART': {
            return initialState
        }

    }
    return state
}