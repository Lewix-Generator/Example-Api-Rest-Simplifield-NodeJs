/**
* IMPORT MODULES
*/
import { Router } from 'express';
const routes = Router();
import AuthToken from '../middleware/security/AuthToken';

/**
 *  Entities Relations
 */
import wishlist_items from "../model/wishlist_items";

/**
 *  Relations
 */
// Post < -- > wishlist_items
// wishlist_items.hasMany(Post, { foreignKey: 'Author' } );
// Post.belongsTo(wishlist_items, { foreignKey: 'Author' } );
/**
 * Controllers
 */
import wishlist_itemsListController      from '../controller/wishlist_items/List';
import wishlist_itemsListOneController   from '../controller/wishlist_items/ListOne';
import wishlist_itemsSaveController      from '../controller/wishlist_items/Save';
import wishlist_itemsUpdateController    from '../controller/wishlist_items/Update';
import wishlist_itemsDeleteController    from '../controller/wishlist_items/Delete';

/**
 * Middlewares
 */
import wishlist_itemsListMid      from '../middleware/wishlist_items/List';
import wishlist_itemsListOneMid   from '../middleware/wishlist_items/ListOne';
import wishlist_itemsSaveMid      from '../middleware/wishlist_items/Save';
import wishlist_itemsUpdateMid    from '../middleware/wishlist_items/Update';
import wishlist_itemsDeleteMid    from '../middleware/wishlist_items/Delete';


/**
 * 
 *     SERVICES wishlist_items
 * 
 */

routes.post("/save",           [ AuthToken ,wishlist_itemsSaveMid ],       wishlist_itemsSaveController);
routes.put("/update",          [ AuthToken, wishlist_itemsUpdateMid ],     wishlist_itemsUpdateController);
routes.get("/list",            [ AuthToken, wishlist_itemsListMid ],       wishlist_itemsListController);
routes.get("/list/:wishlist_item_id",        [ AuthToken, wishlist_itemsListOneMid ],    wishlist_itemsListOneController);
routes.delete("/delete",       [ AuthToken, wishlist_itemsDeleteMid ],     wishlist_itemsDeleteController);
export default routes;