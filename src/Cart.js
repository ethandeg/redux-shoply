import {useSelector} from "react-redux"
const Cart = () => {
    const cart = useSelector(state => state.cart)
    return (
        <div>
            {cart.map(item=> (
                <ul>
                    <li>{item.id}</li>
                    <li>{item.qty}</li>
                </ul>
            ))}
        </div>
    )
}

export default Cart