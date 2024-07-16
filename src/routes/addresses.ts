/**
* IMPORT MODULES
*/
import { Router } from 'express';
const routes = Router();
import AuthToken from '../middleware/security/AuthToken';

/**
 *  Entities Relations
 */
import addresses from "../model/addresses";

/**
 *  Relations
 */
// Post < -- > addresses
// addresses.hasMany(Post, { foreignKey: 'Author' } );
// Post.belongsTo(addresses, { foreignKey: 'Author' } );
/**
 * Controllers
 */
import addressesListController      from '../controller/addresses/List';
import addressesListOneController   from '../controller/addresses/ListOne';
import addressesSaveController      from '../controller/addresses/Save';
import addressesUpdateController    from '../controller/addresses/Update';
import addressesDeleteController    from '../controller/addresses/Delete';

/**
 * Middlewares
 */
import addressesListMid      from '../middleware/addresses/List';
import addressesListOneMid   from '../middleware/addresses/ListOne';
import addressesSaveMid      from '../middleware/addresses/Save';
import addressesUpdateMid    from '../middleware/addresses/Update';
import addressesDeleteMid    from '../middleware/addresses/Delete';


/**
 * 
 *     SERVICES addresses
 * 
 */

routes.post("/save",           [ AuthToken ,addressesSaveMid ],       addressesSaveController);
routes.put("/update",          [ AuthToken, addressesUpdateMid ],     addressesUpdateController);
routes.get("/list",            [ AuthToken, addressesListMid ],       addressesListController);
routes.get("/list/:address_id",        [ AuthToken, addressesListOneMid ],    addressesListOneController);
routes.delete("/delete",       [ AuthToken, addressesDeleteMid ],     addressesDeleteController);
export default routes;