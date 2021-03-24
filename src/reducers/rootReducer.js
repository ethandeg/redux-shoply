import data from "../data.json"


const INITIAL_STATE = {catalog: data.products, cart: [{id: "4260bf52-218a-480e-87ea-4ff42470ce98", qty: 3}] }

function rootReducer(state=INITIAL_STATE, action) {
    switch (action.type) {
        case "ADD_TO_CART":
            return {...state, cart: [...state.cart, action.payload]}
        case "REMOVE_ALL_FROM_CART":
            console.log(action.payload)
            return {...state, cart: [state.cart.filter(item => item.id !== action.payload.id)]}


        default:
            return state
    }
}

export default rootReducer