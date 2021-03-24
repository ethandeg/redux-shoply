import {useSelector} from "react-redux"
import {shallowEqual} from "react-redux"
import Item from "./Item"
const Catalog = () => {
    const items = useSelector(state => state.catalog)
    return (
        <div className="container">
            <div className="row">
                {Object.keys(items).map(id => (
                    <Item item={items[id]} key={id} id={id}/>
                ))}
            </div>
        </div>
    )
}

export default Catalog