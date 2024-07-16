/**
* IMPORT MODULES
*/
import { Router } from 'express';
const routes = Router();
import AuthToken from '../middleware/security/AuthToken';

/**
 *  Entities Relations
 */
import products from "../model/products";

/**
 *  Relations
 */
// Post < -- > products
// products.hasMany(Post, { foreignKey: 'Author' } );
// Post.belongsTo(products, { foreignKey: 'Author' } );
/**
 * Controllers
 */
import productsListController      from '../controller/products/List';
import productsListOneController   from '../controller/products/ListOne';
import productsSaveController      from '../controller/products/Save';
import productsUpdateController    from '../controller/products/Update';
import productsDeleteController    from '../controller/products/Delete';

/**
 * Middlewares
 */
import productsListMid      from '../middleware/products/List';
import productsListOneMid   from '../middleware/products/ListOne';
import productsSaveMid      from '../middleware/products/Save';
import productsUpdateMid    from '../middleware/products/Update';
import productsDeleteMid    from '../middleware/products/Delete';


/**
 * 
 *     SERVICES products
 * 
 */

routes.post("/save",           [ AuthToken ,productsSaveMid ],       productsSaveController);
routes.put("/update",          [ AuthToken, productsUpdateMid ],     productsUpdateController);
routes.get("/list",            [ AuthToken, productsListMid ],       productsListController);
routes.get("/list/:product_id",        [ AuthToken, productsListOneMid ],    productsListOneController);
routes.delete("/delete",       [ AuthToken, productsDeleteMid ],     productsDeleteController);
export default routes;