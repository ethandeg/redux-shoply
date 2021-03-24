import {useParams} from "react-router-dom"
import {useSelector} from "react-redux"
import "./ItemDetails.css"
import AddToCartForm from "./AddToCartForm"
const ItemDetails = () => {
    const {id} = useParams()
    const item = useSelector(state => state.catalog[id])
    const cart = useSelector(state => state.cart)
    const cartItem = cart.filter(item => item.id === id)[0]
    const itemQty = cartItem ? cartItem.qty : 0
    return (
        <div className="container">
            <h1 className="display-1 text-info text-center">{item.name}</h1>
            <div className="row mt-5">
                <div className="col-6">
                    <img src={item.image_url} />
                </div>
                <div className="col-6">
                    <p className="text-center fs-2">{item.description}</p>
                    <h3>${item.price}</h3>
                    <AddToCartForm itemQty={itemQty} id={id}/>
                </div>
            </div>


        </div>


    )
}

export default ItemDetails