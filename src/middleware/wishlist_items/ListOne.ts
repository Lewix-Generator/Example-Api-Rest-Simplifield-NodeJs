/**
 * 
 * Middleware wishlist_items List One
 * Middle to list one wishlist_items
 * 
 */
import { API_RESPONSE_STATUS, patternReponse } from "../pattern/apiResponse";

export default async (req, res, next) => {
  
    const { wishlist_item_id } = req.params;

    if(!wishlist_item_id){
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "wishlist_item_id is required", {});
      return res.status(400).send(objResponse);
    }
  next();
}