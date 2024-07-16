/**
* IMPORT MODULES
*/
import { Router } from 'express';
const routes = Router();
import AuthToken from '../middleware/security/AuthToken';

/**
 *  Entities Relations
 */
import customers from "../model/customers";

/**
 *  Relations
 */
// Post < -- > customers
// customers.hasMany(Post, { foreignKey: 'Author' } );
// Post.belongsTo(customers, { foreignKey: 'Author' } );
/**
 * Controllers
 */
import customersListController      from '../controller/customers/List';
import customersListOneController   from '../controller/customers/ListOne';
import customersSaveController      from '../controller/customers/Save';
import customersUpdateController    from '../controller/customers/Update';
import customersDeleteController    from '../controller/customers/Delete';

/**
 * Middlewares
 */
import customersListMid      from '../middleware/customers/List';
import customersListOneMid   from '../middleware/customers/ListOne';
import customersSaveMid      from '../middleware/customers/Save';
import customersUpdateMid    from '../middleware/customers/Update';
import customersDeleteMid    from '../middleware/customers/Delete';


/**
 * 
 *     SERVICES customers
 * 
 */

routes.post("/save",           [ AuthToken ,customersSaveMid ],       customersSaveController);
routes.put("/update",          [ AuthToken, customersUpdateMid ],     customersUpdateController);
routes.get("/list",            [ AuthToken, customersListMid ],       customersListController);
routes.get("/list/:customer_id",        [ AuthToken, customersListOneMid ],    customersListOneController);
routes.delete("/delete",       [ AuthToken, customersDeleteMid ],     customersDeleteController);
export default routes;