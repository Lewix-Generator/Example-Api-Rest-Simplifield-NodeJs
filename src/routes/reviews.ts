/**
* IMPORT MODULES
*/
import { Router } from 'express';
const routes = Router();
import AuthToken from '../middleware/security/AuthToken';

/**
 *  Entities Relations
 */
import reviews from "../model/reviews";

/**
 *  Relations
 */
// Post < -- > reviews
// reviews.hasMany(Post, { foreignKey: 'Author' } );
// Post.belongsTo(reviews, { foreignKey: 'Author' } );
/**
 * Controllers
 */
import reviewsListController      from '../controller/reviews/List';
import reviewsListOneController   from '../controller/reviews/ListOne';
import reviewsSaveController      from '../controller/reviews/Save';
import reviewsUpdateController    from '../controller/reviews/Update';
import reviewsDeleteController    from '../controller/reviews/Delete';

/**
 * Middlewares
 */
import reviewsListMid      from '../middleware/reviews/List';
import reviewsListOneMid   from '../middleware/reviews/ListOne';
import reviewsSaveMid      from '../middleware/reviews/Save';
import reviewsUpdateMid    from '../middleware/reviews/Update';
import reviewsDeleteMid    from '../middleware/reviews/Delete';


/**
 * 
 *     SERVICES reviews
 * 
 */

routes.post("/save",           [ AuthToken ,reviewsSaveMid ],       reviewsSaveController);
routes.put("/update",          [ AuthToken, reviewsUpdateMid ],     reviewsUpdateController);
routes.get("/list",            [ AuthToken, reviewsListMid ],       reviewsListController);
routes.get("/list/:review_id",        [ AuthToken, reviewsListOneMid ],    reviewsListOneController);
routes.delete("/delete",       [ AuthToken, reviewsDeleteMid ],     reviewsDeleteController);
export default routes;