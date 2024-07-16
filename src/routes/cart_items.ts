/**
* IMPORT MODULES
*/
import { Router } from 'express';
const routes = Router();
import AuthToken from '../middleware/security/AuthToken';

/**
 *  Entities Relations
 */
import cart_items from "../model/cart_items";

/**
 *  Relations
 */
// Post < -- > cart_items
// cart_items.hasMany(Post, { foreignKey: 'Author' } );
// Post.belongsTo(cart_items, { foreignKey: 'Author' } );
/**
 * Controllers
 */
import cart_itemsListController      from '../controller/cart_items/List';
import cart_itemsListOneController   from '../controller/cart_items/ListOne';
import cart_itemsSaveController      from '../controller/cart_items/Save';
import cart_itemsUpdateController    from '../controller/cart_items/Update';
import cart_itemsDeleteController    from '../controller/cart_items/Delete';

/**
 * Middlewares
 */
import cart_itemsListMid      from '../middleware/cart_items/List';
import cart_itemsListOneMid   from '../middleware/cart_items/ListOne';
import cart_itemsSaveMid      from '../middleware/cart_items/Save';
import cart_itemsUpdateMid    from '../middleware/cart_items/Update';
import cart_itemsDeleteMid    from '../middleware/cart_items/Delete';


/**
 * 
 *     SERVICES cart_items
 * 
 */

routes.post("/save",           [ AuthToken ,cart_itemsSaveMid ],       cart_itemsSaveController);
routes.put("/update",          [ AuthToken, cart_itemsUpdateMid ],     cart_itemsUpdateController);
routes.get("/list",            [ AuthToken, cart_itemsListMid ],       cart_itemsListController);
routes.get("/list/:cart_item_id",        [ AuthToken, cart_itemsListOneMid ],    cart_itemsListOneController);
routes.delete("/delete",       [ AuthToken, cart_itemsDeleteMid ],     cart_itemsDeleteController);
export default routes;