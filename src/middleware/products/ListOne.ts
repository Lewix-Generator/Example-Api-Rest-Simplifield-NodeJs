/**
 * 
 * Middleware products List One
 * Middle to list one products
 * 
 */
import { API_RESPONSE_STATUS, patternReponse } from "../pattern/apiResponse";

export default async (req, res, next) => {
  
    const { product_id } = req.params;

    if(!product_id){
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "product_id is required", {});
      return res.status(400).send(objResponse);
    }
  next();
}