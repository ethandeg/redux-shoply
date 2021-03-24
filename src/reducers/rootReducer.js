import data from "../data.json"


const INITIAL_STATE = {catalog: data.products, cart: [{id: "4260bf52-218a-480e-87ea-4ff42470ce98", qty: 3}] }

function rootReducer(state=INITIAL_STATE, action) {
    switch (action.type) {
        case "ADD_TO_CART":
            return {...state, cart: [...state.cart, action.payload]}
        default:
            return state
    }
}

export default rootReducer