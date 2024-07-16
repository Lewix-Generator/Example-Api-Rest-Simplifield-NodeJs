/**
* IMPORT MODULES
*/
import { Router } from 'express';
const routes = Router();
import AuthToken from '../middleware/security/AuthToken';

/**
 *  Entities Relations
 */
import wishlists from "../model/wishlists";

/**
 *  Relations
 */
// Post < -- > wishlists
// wishlists.hasMany(Post, { foreignKey: 'Author' } );
// Post.belongsTo(wishlists, { foreignKey: 'Author' } );
/**
 * Controllers
 */
import wishlistsListController      from '../controller/wishlists/List';
import wishlistsListOneController   from '../controller/wishlists/ListOne';
import wishlistsSaveController      from '../controller/wishlists/Save';
import wishlistsUpdateController    from '../controller/wishlists/Update';
import wishlistsDeleteController    from '../controller/wishlists/Delete';

/**
 * Middlewares
 */
import wishlistsListMid      from '../middleware/wishlists/List';
import wishlistsListOneMid   from '../middleware/wishlists/ListOne';
import wishlistsSaveMid      from '../middleware/wishlists/Save';
import wishlistsUpdateMid    from '../middleware/wishlists/Update';
import wishlistsDeleteMid    from '../middleware/wishlists/Delete';


/**
 * 
 *     SERVICES wishlists
 * 
 */

routes.post("/save",           [ AuthToken ,wishlistsSaveMid ],       wishlistsSaveController);
routes.put("/update",          [ AuthToken, wishlistsUpdateMid ],     wishlistsUpdateController);
routes.get("/list",            [ AuthToken, wishlistsListMid ],       wishlistsListController);
routes.get("/list/:wishlist_id",        [ AuthToken, wishlistsListOneMid ],    wishlistsListOneController);
routes.delete("/delete",       [ AuthToken, wishlistsDeleteMid ],     wishlistsDeleteController);
export default routes;