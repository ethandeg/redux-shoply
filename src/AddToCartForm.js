import {useState} from "react"
import {useDispatch} from "react-redux"
const AddToCartForm = ({itemQty, id}) => {
    const dispatch = useDispatch()


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
<>
    <button onClick={addToCart} className="badge bg-secondary">Add to Cart</button>
    <input type="number" id='qty' name='qty' value={formData.qty} onChange={handleChange} style={{width: "20%"}}></input>
    <button onClick={removeAllFromCart} className="badge bg-secondary">Remove All</button>
</>
 )
}

export default AddToCartForm