/**
* IMPORT MODULES
*/
import { Router } from 'express';
const routes = Router();
import AuthToken from '../middleware/security/AuthToken';

/**
 *  Entities Relations
 */
import shopping_carts from "../model/shopping_carts";

/**
 *  Relations
 */
// Post < -- > shopping_carts
// shopping_carts.hasMany(Post, { foreignKey: 'Author' } );
// Post.belongsTo(shopping_carts, { foreignKey: 'Author' } );
/**
 * Controllers
 */
import shopping_cartsListController      from '../controller/shopping_carts/List';
import shopping_cartsListOneController   from '../controller/shopping_carts/ListOne';
import shopping_cartsSaveController      from '../controller/shopping_carts/Save';
import shopping_cartsUpdateController    from '../controller/shopping_carts/Update';
import shopping_cartsDeleteController    from '../controller/shopping_carts/Delete';

/**
 * Middlewares
 */
import shopping_cartsListMid      from '../middleware/shopping_carts/List';
import shopping_cartsListOneMid   from '../middleware/shopping_carts/ListOne';
import shopping_cartsSaveMid      from '../middleware/shopping_carts/Save';
import shopping_cartsUpdateMid    from '../middleware/shopping_carts/Update';
import shopping_cartsDeleteMid    from '../middleware/shopping_carts/Delete';


/**
 * 
 *     SERVICES shopping_carts
 * 
 */

routes.post("/save",           [ AuthToken ,shopping_cartsSaveMid ],       shopping_cartsSaveController);
routes.put("/update",          [ AuthToken, shopping_cartsUpdateMid ],     shopping_cartsUpdateController);
routes.get("/list",            [ AuthToken, shopping_cartsListMid ],       shopping_cartsListController);
routes.get("/list/:cart_id",        [ AuthToken, shopping_cartsListOneMid ],    shopping_cartsListOneController);
routes.delete("/delete",       [ AuthToken, shopping_cartsDeleteMid ],     shopping_cartsDeleteController);
export default routes;