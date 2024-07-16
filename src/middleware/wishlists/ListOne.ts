/**
 * 
 * Middleware wishlists List One
 * Middle to list one wishlists
 * 
 */
import { API_RESPONSE_STATUS, patternReponse } from "../pattern/apiResponse";

export default async (req, res, next) => {
  
    const { wishlist_id } = req.params;

    if(!wishlist_id){
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "wishlist_id is required", {});
      return res.status(400).send(objResponse);
    }
  next();
}