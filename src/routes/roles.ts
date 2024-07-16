/**
* IMPORT MODULES
*/
import { Router } from 'express';
const routes = Router();
import AuthToken from '../middleware/security/AuthToken';

/**
 *  Entities Relations
 */
import roles from "../model/roles";

/**
 *  Relations
 */
// Post < -- > roles
// roles.hasMany(Post, { foreignKey: 'Author' } );
// Post.belongsTo(roles, { foreignKey: 'Author' } );
/**
 * Controllers
 */
import rolesListController      from '../controller/roles/List';
import rolesListOneController   from '../controller/roles/ListOne';
import rolesSaveController      from '../controller/roles/Save';
import rolesUpdateController    from '../controller/roles/Update';
import rolesDeleteController    from '../controller/roles/Delete';

/**
 * Middlewares
 */
import rolesListMid      from '../middleware/roles/List';
import rolesListOneMid   from '../middleware/roles/ListOne';
import rolesSaveMid      from '../middleware/roles/Save';
import rolesUpdateMid    from '../middleware/roles/Update';
import rolesDeleteMid    from '../middleware/roles/Delete';


/**
 * 
 *     SERVICES roles
 * 
 */

routes.post("/save",           [ AuthToken ,rolesSaveMid ],       rolesSaveController);
routes.put("/update",          [ AuthToken, rolesUpdateMid ],     rolesUpdateController);
routes.get("/list",            [ AuthToken, rolesListMid ],       rolesListController);
routes.get("/list/:role_id",        [ AuthToken, rolesListOneMid ],    rolesListOneController);
routes.delete("/delete",       [ AuthToken, rolesDeleteMid ],     rolesDeleteController);
export default routes;