/**
* IMPORT MODULES
*/
import { Router } from 'express';
const routes = Router();
import AuthToken from '../middleware/security/AuthToken';

/**
 *  Entities Relations
 */
import payments from "../model/payments";

/**
 *  Relations
 */
// Post < -- > payments
// payments.hasMany(Post, { foreignKey: 'Author' } );
// Post.belongsTo(payments, { foreignKey: 'Author' } );
/**
 * Controllers
 */
import paymentsListController      from '../controller/payments/List';
import paymentsListOneController   from '../controller/payments/ListOne';
import paymentsSaveController      from '../controller/payments/Save';
import paymentsUpdateController    from '../controller/payments/Update';
import paymentsDeleteController    from '../controller/payments/Delete';

/**
 * Middlewares
 */
import paymentsListMid      from '../middleware/payments/List';
import paymentsListOneMid   from '../middleware/payments/ListOne';
import paymentsSaveMid      from '../middleware/payments/Save';
import paymentsUpdateMid    from '../middleware/payments/Update';
import paymentsDeleteMid    from '../middleware/payments/Delete';


/**
 * 
 *     SERVICES payments
 * 
 */

routes.post("/save",           [ AuthToken ,paymentsSaveMid ],       paymentsSaveController);
routes.put("/update",          [ AuthToken, paymentsUpdateMid ],     paymentsUpdateController);
routes.get("/list",            [ AuthToken, paymentsListMid ],       paymentsListController);
routes.get("/list/:payment_id",        [ AuthToken, paymentsListOneMid ],    paymentsListOneController);
routes.delete("/delete",       [ AuthToken, paymentsDeleteMid ],     paymentsDeleteController);
export default routes;