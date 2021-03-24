import {useParams} from "react-router-dom"
import {useSelector} from "react-redux"
import "./ItemDetails.css"
const ItemDetails = () => {
    const {id} = useParams()
    const item = useSelector(state => state.catalog[id])
    const cart = useSelector(state => state.cart)
    const cartItem = cart.filter(item => item.id === id)[0]
    const itemQty = cartItem ? cartItem.qty : 0
    return (
        <div className="item">
            <h1 className="display-1 text-info text-center">{item.name}</h1>
            <div className="item-body">
                <div className="billboard-img">
                    <img src={item.image_url} />
                </div>
                <div className="billboard-text">
                    <p>{item.description}</p>
                </div>
            </div>

        </div>


    )
}

export default ItemDetails