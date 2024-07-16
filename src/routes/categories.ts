/**
* IMPORT MODULES
*/
import { Router } from 'express';
const routes = Router();
import AuthToken from '../middleware/security/AuthToken';

/**
 *  Entities Relations
 */
import categories from "../model/categories";

/**
 *  Relations
 */
// Post < -- > categories
// categories.hasMany(Post, { foreignKey: 'Author' } );
// Post.belongsTo(categories, { foreignKey: 'Author' } );
/**
 * Controllers
 */
import categoriesListController      from '../controller/categories/List';
import categoriesListOneController   from '../controller/categories/ListOne';
import categoriesSaveController      from '../controller/categories/Save';
import categoriesUpdateController    from '../controller/categories/Update';
import categoriesDeleteController    from '../controller/categories/Delete';

/**
 * Middlewares
 */
import categoriesListMid      from '../middleware/categories/List';
import categoriesListOneMid   from '../middleware/categories/ListOne';
import categoriesSaveMid      from '../middleware/categories/Save';
import categoriesUpdateMid    from '../middleware/categories/Update';
import categoriesDeleteMid    from '../middleware/categories/Delete';


/**
 * 
 *     SERVICES categories
 * 
 */

routes.post("/save",           [ AuthToken ,categoriesSaveMid ],       categoriesSaveController);
routes.put("/update",          [ AuthToken, categoriesUpdateMid ],     categoriesUpdateController);
routes.get("/list",            [ AuthToken, categoriesListMid ],       categoriesListController);
routes.get("/list/:category_id",        [ AuthToken, categoriesListOneMid ],    categoriesListOneController);
routes.delete("/delete",       [ AuthToken, categoriesDeleteMid ],     categoriesDeleteController);
export default routes;