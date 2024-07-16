/**
* IMPORT MODULES
*/
import { Router } from 'express';
const routes = Router();
import AuthToken from '../middleware/security/AuthToken';

/**
 *  Entities Relations
 */
import permissions from "../model/permissions";

/**
 *  Relations
 */
// Post < -- > permissions
// permissions.hasMany(Post, { foreignKey: 'Author' } );
// Post.belongsTo(permissions, { foreignKey: 'Author' } );
/**
 * Controllers
 */
import permissionsListController      from '../controller/permissions/List';
import permissionsListOneController   from '../controller/permissions/ListOne';
import permissionsSaveController      from '../controller/permissions/Save';
import permissionsUpdateController    from '../controller/permissions/Update';
import permissionsDeleteController    from '../controller/permissions/Delete';

/**
 * Middlewares
 */
import permissionsListMid      from '../middleware/permissions/List';
import permissionsListOneMid   from '../middleware/permissions/ListOne';
import permissionsSaveMid      from '../middleware/permissions/Save';
import permissionsUpdateMid    from '../middleware/permissions/Update';
import permissionsDeleteMid    from '../middleware/permissions/Delete';


/**
 * 
 *     SERVICES permissions
 * 
 */

routes.post("/save",           [ AuthToken ,permissionsSaveMid ],       permissionsSaveController);
routes.put("/update",          [ AuthToken, permissionsUpdateMid ],     permissionsUpdateController);
routes.get("/list",            [ AuthToken, permissionsListMid ],       permissionsListController);
routes.get("/list/:permission_id",        [ AuthToken, permissionsListOneMid ],    permissionsListOneController);
routes.delete("/delete",       [ AuthToken, permissionsDeleteMid ],     permissionsDeleteController);
export default routes;