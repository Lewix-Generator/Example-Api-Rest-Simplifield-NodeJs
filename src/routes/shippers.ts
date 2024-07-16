/**
* IMPORT MODULES
*/
import { Router } from 'express';
const routes = Router();
import AuthToken from '../middleware/security/AuthToken';

/**
 *  Entities Relations
 */
import shippers from "../model/shippers";

/**
 *  Relations
 */
// Post < -- > shippers
// shippers.hasMany(Post, { foreignKey: 'Author' } );
// Post.belongsTo(shippers, { foreignKey: 'Author' } );
/**
 * Controllers
 */
import shippersListController      from '../controller/shippers/List';
import shippersListOneController   from '../controller/shippers/ListOne';
import shippersSaveController      from '../controller/shippers/Save';
import shippersUpdateController    from '../controller/shippers/Update';
import shippersDeleteController    from '../controller/shippers/Delete';

/**
 * Middlewares
 */
import shippersListMid      from '../middleware/shippers/List';
import shippersListOneMid   from '../middleware/shippers/ListOne';
import shippersSaveMid      from '../middleware/shippers/Save';
import shippersUpdateMid    from '../middleware/shippers/Update';
import shippersDeleteMid    from '../middleware/shippers/Delete';


/**
 * 
 *     SERVICES shippers
 * 
 */

routes.post("/save",           [ AuthToken ,shippersSaveMid ],       shippersSaveController);
routes.put("/update",          [ AuthToken, shippersUpdateMid ],     shippersUpdateController);
routes.get("/list",            [ AuthToken, shippersListMid ],       shippersListController);
routes.get("/list/:shipper_id",        [ AuthToken, shippersListOneMid ],    shippersListOneController);
routes.delete("/delete",       [ AuthToken, shippersDeleteMid ],     shippersDeleteController);
export default routes;