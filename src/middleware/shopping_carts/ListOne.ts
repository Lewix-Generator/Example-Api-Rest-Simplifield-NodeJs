/**
 * 
 * Middleware shopping_carts List One
 * Middle to list one shopping_carts
 * 
 */
import { API_RESPONSE_STATUS, patternReponse } from "../pattern/apiResponse";

export default async (req, res, next) => {
  
    const { cart_id } = req.params;

    if(!cart_id){
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "cart_id is required", {});
      return res.status(400).send(objResponse);
    }
  next();
}