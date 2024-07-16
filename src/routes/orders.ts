/**
* IMPORT MODULES
*/
import { Router } from 'express';
const routes = Router();
import AuthToken from '../middleware/security/AuthToken';

/**
 *  Entities Relations
 */
import orders from "../model/orders";

/**
 *  Relations
 */
// Post < -- > orders
// orders.hasMany(Post, { foreignKey: 'Author' } );
// Post.belongsTo(orders, { foreignKey: 'Author' } );
/**
 * Controllers
 */
import ordersListController      from '../controller/orders/List';
import ordersListOneController   from '../controller/orders/ListOne';
import ordersSaveController      from '../controller/orders/Save';
import ordersUpdateController    from '../controller/orders/Update';
import ordersDeleteController    from '../controller/orders/Delete';

/**
 * Middlewares
 */
import ordersListMid      from '../middleware/orders/List';
import ordersListOneMid   from '../middleware/orders/ListOne';
import ordersSaveMid      from '../middleware/orders/Save';
import ordersUpdateMid    from '../middleware/orders/Update';
import ordersDeleteMid    from '../middleware/orders/Delete';


/**
 * 
 *     SERVICES orders
 * 
 */

routes.post("/save",           [ AuthToken ,ordersSaveMid ],       ordersSaveController);
routes.put("/update",          [ AuthToken, ordersUpdateMid ],     ordersUpdateController);
routes.get("/list",            [ AuthToken, ordersListMid ],       ordersListController);
routes.get("/list/:order_id",        [ AuthToken, ordersListOneMid ],    ordersListOneController);
routes.delete("/delete",       [ AuthToken, ordersDeleteMid ],     ordersDeleteController);
export default routes;