import {useSelector} from "react-redux"
import Item from "./Item"
const Cart = () => {
    const cart = useSelector(state => state.cart)
    const catalog = useSelector(state => state.catalog)
    const prices = []
    const items = cart.map(item=> {
        const product = catalog[item.id];
        const price = item.qty * product.price
        prices.push(price)
        return (
            <Item item={product} key={item.id} id={item.id}/>
        )
    })
    return (
        <div class="container">
            <h1 className="display-1 text-success text-center">Cart Price: {prices.length ? prices.reduce(function(accum,next){
                const num = accum + next
                return Math.round((num + Number.EPSILON) * 100) / 100
            }): 0}</h1>
            <div className="row">
                {items}
            </div>
            
            
        </div>
    )
}

export default Cart