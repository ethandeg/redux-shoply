import {useSelector} from "react-redux"
import {Link} from "react-router-dom"
import AddToCartForm from "./AddToCartForm"

const Item = ({item, id}) => {
    const cart = useSelector(state => state.cart)
    const cartItem = cart.filter(item => item.id === id)[0]
    const itemQty = cartItem ? cartItem.qty : 0
    return (
 
        <div className="col-sm my-3">
            <div className="card" style={{width: "18rem", height: "22rem"}}>
                <img style={{height: "50%"}}src={item.image_url} className="card-img-top" alt={item.name} />
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">${item.price}</p>
                    {<Link className="btn btn-sm btn-info float-start" to={`/item/${id}`}>Learn More</Link>}
                    <div className="card-footer" style={{position: "absolute", bottom: "1%"}}>
                        <AddToCartForm itemQty={itemQty} id={id} key={id}/>
                    </div>
                </div>
                
            </div>
        </div>
    )

}

export default Item