import {useSelector} from "react-redux"
import Item from "./Item"
const Catalog = () => {
    const items = useSelector(state => state.catalog)
    console.log(items)
    return (
        <>
        {Object.keys(items).map(id => (
            <Item item={items[id]} key={id} id={id}/>
        ))}
        </>
    )
}

export default Catalog