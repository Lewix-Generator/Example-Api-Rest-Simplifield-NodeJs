/**
* IMPORT MODULES
*/
import { Router } from 'express';
const routes = Router();
import AuthToken from '../middleware/security/AuthToken';

/**
 *  Entities Relations
 */
import coupons from "../model/coupons";

/**
 *  Relations
 */
// Post < -- > coupons
// coupons.hasMany(Post, { foreignKey: 'Author' } );
// Post.belongsTo(coupons, { foreignKey: 'Author' } );
/**
 * Controllers
 */
import couponsListController      from '../controller/coupons/List';
import couponsListOneController   from '../controller/coupons/ListOne';
import couponsSaveController      from '../controller/coupons/Save';
import couponsUpdateController    from '../controller/coupons/Update';
import couponsDeleteController    from '../controller/coupons/Delete';

/**
 * Middlewares
 */
import couponsListMid      from '../middleware/coupons/List';
import couponsListOneMid   from '../middleware/coupons/ListOne';
import couponsSaveMid      from '../middleware/coupons/Save';
import couponsUpdateMid    from '../middleware/coupons/Update';
import couponsDeleteMid    from '../middleware/coupons/Delete';


/**
 * 
 *     SERVICES coupons
 * 
 */

routes.post("/save",           [ AuthToken ,couponsSaveMid ],       couponsSaveController);
routes.put("/update",          [ AuthToken, couponsUpdateMid ],     couponsUpdateController);
routes.get("/list",            [ AuthToken, couponsListMid ],       couponsListController);
routes.get("/list/:coupon_id",        [ AuthToken, couponsListOneMid ],    couponsListOneController);
routes.delete("/delete",       [ AuthToken, couponsDeleteMid ],     couponsDeleteController);
export default routes;