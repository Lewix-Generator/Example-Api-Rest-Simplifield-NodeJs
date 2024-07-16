/**
* IMPORT MODULES
*/
import { Router } from 'express';
const routes = Router();
import AuthToken from '../middleware/security/AuthToken';

/**
 *  Entities Relations
 */
import employees from "../model/employees";

/**
 *  Relations
 */
// Post < -- > employees
// employees.hasMany(Post, { foreignKey: 'Author' } );
// Post.belongsTo(employees, { foreignKey: 'Author' } );
/**
 * Controllers
 */
import employeesListController      from '../controller/employees/List';
import employeesListOneController   from '../controller/employees/ListOne';
import employeesSaveController      from '../controller/employees/Save';
import employeesUpdateController    from '../controller/employees/Update';
import employeesDeleteController    from '../controller/employees/Delete';

/**
 * Middlewares
 */
import employeesListMid      from '../middleware/employees/List';
import employeesListOneMid   from '../middleware/employees/ListOne';
import employeesSaveMid      from '../middleware/employees/Save';
import employeesUpdateMid    from '../middleware/employees/Update';
import employeesDeleteMid    from '../middleware/employees/Delete';


/**
 * 
 *     SERVICES employees
 * 
 */

routes.post("/save",           [ AuthToken ,employeesSaveMid ],       employeesSaveController);
routes.put("/update",          [ AuthToken, employeesUpdateMid ],     employeesUpdateController);
routes.get("/list",            [ AuthToken, employeesListMid ],       employeesListController);
routes.get("/list/:employee_id",        [ AuthToken, employeesListOneMid ],    employeesListOneController);
routes.delete("/delete",       [ AuthToken, employeesDeleteMid ],     employeesDeleteController);
export default routes;