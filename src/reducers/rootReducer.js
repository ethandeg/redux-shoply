import data from "../data.json"


const INITIAL_STATE = {catalog: data.products, cart: [{id: "4260bf52-218a-480e-87ea-4ff42470ce98", qty: 3}] }

function rootReducer(state=INITIAL_STATE, action) {
    switch (action.type) {
        case "ADD_TO_CART":
            const item = state.cart.filter(item => item.id === action.payload.id)[0]
            if(item){
                const items = state.cart.map(item => {
                    if(item.id === action.payload.id){
                        return {...item, qty: action.payload.qty}
                    }
                    return item
                })
                return {...state, cart: items}
            } else {
                return {...state, cart: [...state.cart, action.payload]}
            }

            

        case "REMOVE_ALL_FROM_CART":

            return {...state, cart: state.cart.filter(item => item.id !== action.payload.id)}


        default:
            return state
    }
}

export default rootReducer