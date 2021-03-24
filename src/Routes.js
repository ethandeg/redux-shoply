import {Route, Switch} from "react-router-dom"
import Catalog from "./Catalog"
import ItemDetails from "./ItemDetails"
import Cart from "./Cart"
const Routes = () => {
    return (
        <Switch>
            <Route exact path = "/"> <Catalog /></Route>
            <Route exact path = "/cart"> <Cart /></Route>
            <Route exact path = "/item/:id"> <ItemDetails /></Route>
        </Switch>
    )
}


export default Routes