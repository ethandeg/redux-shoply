import {useState} from "react"
import {useSelector, useDispatch} from "react-redux"
const Item = ({item, id}) => {
    const cart = useSelector(state => state.cart)
    const thisCart = cart.filter(item => item.id === id)
    let cartQty = 0
    if(!!thisCart.length) cartQty = thisCart[0].qty
    return (
 
        <div className="col-sm my-3">
            <div className="card" style={{width: "18rem", height: "25rem"}}>
                <img style={{height: "55%"}}src={item.image_url} className="card-img-top" alt={item.name} />
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.description}</p>
                    <div className="card-footer" style={{position: "absolute", bottom: "1%"}}>
                        <button className="badge bg-secondary">Add to Cart</button>
                        <input type="number" value={cartQty} style={{width: "20%"}}></input>
                        <button className="badge bg-secondary">Remove All</button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Item