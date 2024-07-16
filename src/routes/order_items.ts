/**
* IMPORT MODULES
*/
import { Router } from 'express';
const routes = Router();
import AuthToken from '../middleware/security/AuthToken';

/**
 *  Entities Relations
 */
import order_items from "../model/order_items";

/**
 *  Relations
 */
// Post < -- > order_items
// order_items.hasMany(Post, { foreignKey: 'Author' } );
// Post.belongsTo(order_items, { foreignKey: 'Author' } );
/**
 * Controllers
 */
import order_itemsListController      from '../controller/order_items/List';
import order_itemsListOneController   from '../controller/order_items/ListOne';
import order_itemsSaveController      from '../controller/order_items/Save';
import order_itemsUpdateController    from '../controller/order_items/Update';
import order_itemsDeleteController    from '../controller/order_items/Delete';

/**
 * Middlewares
 */
import order_itemsListMid      from '../middleware/order_items/List';
import order_itemsListOneMid   from '../middleware/order_items/ListOne';
import order_itemsSaveMid      from '../middleware/order_items/Save';
import order_itemsUpdateMid    from '../middleware/order_items/Update';
import order_itemsDeleteMid    from '../middleware/order_items/Delete';


/**
 * 
 *     SERVICES order_items
 * 
 */

routes.post("/save",           [ AuthToken ,order_itemsSaveMid ],       order_itemsSaveController);
routes.put("/update",          [ AuthToken, order_itemsUpdateMid ],     order_itemsUpdateController);
routes.get("/list",            [ AuthToken, order_itemsListMid ],       order_itemsListController);
routes.get("/list/:order_item_id",        [ AuthToken, order_itemsListOneMid ],    order_itemsListOneController);
routes.delete("/delete",       [ AuthToken, order_itemsDeleteMid ],     order_itemsDeleteController);
export default routes;