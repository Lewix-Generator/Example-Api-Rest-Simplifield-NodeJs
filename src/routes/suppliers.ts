/**
* IMPORT MODULES
*/
import { Router } from 'express';
const routes = Router();
import AuthToken from '../middleware/security/AuthToken';

/**
 *  Entities Relations
 */
import suppliers from "../model/suppliers";

/**
 *  Relations
 */
// Post < -- > suppliers
// suppliers.hasMany(Post, { foreignKey: 'Author' } );
// Post.belongsTo(suppliers, { foreignKey: 'Author' } );
/**
 * Controllers
 */
import suppliersListController      from '../controller/suppliers/List';
import suppliersListOneController   from '../controller/suppliers/ListOne';
import suppliersSaveController      from '../controller/suppliers/Save';
import suppliersUpdateController    from '../controller/suppliers/Update';
import suppliersDeleteController    from '../controller/suppliers/Delete';

/**
 * Middlewares
 */
import suppliersListMid      from '../middleware/suppliers/List';
import suppliersListOneMid   from '../middleware/suppliers/ListOne';
import suppliersSaveMid      from '../middleware/suppliers/Save';
import suppliersUpdateMid    from '../middleware/suppliers/Update';
import suppliersDeleteMid    from '../middleware/suppliers/Delete';


/**
 * 
 *     SERVICES suppliers
 * 
 */

routes.post("/save",           [ AuthToken ,suppliersSaveMid ],       suppliersSaveController);
routes.put("/update",          [ AuthToken, suppliersUpdateMid ],     suppliersUpdateController);
routes.get("/list",            [ AuthToken, suppliersListMid ],       suppliersListController);
routes.get("/list/:supplier_id",        [ AuthToken, suppliersListOneMid ],    suppliersListOneController);
routes.delete("/delete",       [ AuthToken, suppliersDeleteMid ],     suppliersDeleteController);
export default routes;