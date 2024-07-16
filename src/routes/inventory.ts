/**
* IMPORT MODULES
*/
import { Router } from 'express';
const routes = Router();
import AuthToken from '../middleware/security/AuthToken';

/**
 *  Entities Relations
 */
import inventory from "../model/inventory";

/**
 *  Relations
 */
// Post < -- > inventory
// inventory.hasMany(Post, { foreignKey: 'Author' } );
// Post.belongsTo(inventory, { foreignKey: 'Author' } );
/**
 * Controllers
 */
import inventoryListController      from '../controller/inventory/List';
import inventoryListOneController   from '../controller/inventory/ListOne';
import inventorySaveController      from '../controller/inventory/Save';
import inventoryUpdateController    from '../controller/inventory/Update';
import inventoryDeleteController    from '../controller/inventory/Delete';

/**
 * Middlewares
 */
import inventoryListMid      from '../middleware/inventory/List';
import inventoryListOneMid   from '../middleware/inventory/ListOne';
import inventorySaveMid      from '../middleware/inventory/Save';
import inventoryUpdateMid    from '../middleware/inventory/Update';
import inventoryDeleteMid    from '../middleware/inventory/Delete';


/**
 * 
 *     SERVICES inventory
 * 
 */

routes.post("/save",           [ AuthToken ,inventorySaveMid ],       inventorySaveController);
routes.put("/update",          [ AuthToken, inventoryUpdateMid ],     inventoryUpdateController);
routes.get("/list",            [ AuthToken, inventoryListMid ],       inventoryListController);
routes.get("/list/:inventory_id",        [ AuthToken, inventoryListOneMid ],    inventoryListOneController);
routes.delete("/delete",       [ AuthToken, inventoryDeleteMid ],     inventoryDeleteController);
export default routes;