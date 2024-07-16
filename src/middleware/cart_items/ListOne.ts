/**
 * 
 * Middleware cart_items List One
 * Middle to list one cart_items
 * 
 */
import { API_RESPONSE_STATUS, patternReponse } from "../pattern/apiResponse";

export default async (req, res, next) => {
  
    const { cart_item_id } = req.params;

    if(!cart_item_id){
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "cart_item_id is required", {});
      return res.status(400).send(objResponse);
    }
  next();
}