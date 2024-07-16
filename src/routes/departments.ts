/**
* IMPORT MODULES
*/
import { Router } from 'express';
const routes = Router();
import AuthToken from '../middleware/security/AuthToken';

/**
 *  Entities Relations
 */
import departments from "../model/departments";

/**
 *  Relations
 */
// Post < -- > departments
// departments.hasMany(Post, { foreignKey: 'Author' } );
// Post.belongsTo(departments, { foreignKey: 'Author' } );
/**
 * Controllers
 */
import departmentsListController      from '../controller/departments/List';
import departmentsListOneController   from '../controller/departments/ListOne';
import departmentsSaveController      from '../controller/departments/Save';
import departmentsUpdateController    from '../controller/departments/Update';
import departmentsDeleteController    from '../controller/departments/Delete';

/**
 * Middlewares
 */
import departmentsListMid      from '../middleware/departments/List';
import departmentsListOneMid   from '../middleware/departments/ListOne';
import departmentsSaveMid      from '../middleware/departments/Save';
import departmentsUpdateMid    from '../middleware/departments/Update';
import departmentsDeleteMid    from '../middleware/departments/Delete';


/**
 * 
 *     SERVICES departments
 * 
 */

routes.post("/save",           [ AuthToken ,departmentsSaveMid ],       departmentsSaveController);
routes.put("/update",          [ AuthToken, departmentsUpdateMid ],     departmentsUpdateController);
routes.get("/list",            [ AuthToken, departmentsListMid ],       departmentsListController);
routes.get("/list/:department_id",        [ AuthToken, departmentsListOneMid ],    departmentsListOneController);
routes.delete("/delete",       [ AuthToken, departmentsDeleteMid ],     departmentsDeleteController);
export default routes;