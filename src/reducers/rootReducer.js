import data from "../data.json"


const INITIAL_STATE = {catalog: data.products, cart: [] }

function rootReducer(state=INITIAL_STATE, action) {
    switch (action.type) {
        default:
            return state
    }
}

export default rootReducer