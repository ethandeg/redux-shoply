import {useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {Link} from "react-router-dom"
const Item = ({item, id}) => {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    const cartItem = cart.filter(item => item.id === id)[0]
    const itemQty = cartItem ? cartItem.qty : 0
    const [formData, setFormData] = useState({qty: itemQty})
    const handleChange = e => {
        const {name, value} = e.target;
        setFormData({[name]: value})
    }

    


    const addToCart = () => {
        dispatch({type: "ADD_TO_CART", payload: {id, qty: +formData.qty}})
    }

    const removeAllFromCart = () => {
        dispatch({type: "REMOVE_ALL_FROM_CART", payload: {id}})
        formData.qty = 0
    }
    return (
 
        <div className="col-sm my-3">
            <div className="card" style={{width: "18rem", height: "22rem"}}>
                <img style={{height: "50%"}}src={item.image_url} className="card-img-top" alt={item.name} />
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">${item.price}</p>
                    {<Link className="btn btn-sm btn-info float-start" to={`/item/${id}`}>Learn More</Link>}
                    <div className="card-footer" style={{position: "absolute", bottom: "1%"}}>
                        <button onClick={addToCart} className="badge bg-secondary">Add to Cart</button>
                        <input type="number" id='qty' name='qty' value={formData.qty} onChange={handleChange} style={{width: "20%"}}></input>
                        <button onClick={removeAllFromCart} className="badge bg-secondary">Remove All</button>
                    </div>
                </div>
                
            </div>
        </div>
    )

}

export default Item