/**
 * 
 * Middleware orders List One
 * Middle to list one orders
 * 
 */
import { API_RESPONSE_STATUS, patternReponse } from "../pattern/apiResponse";

export default async (req, res, next) => {
  
    const { order_id } = req.params;

    if(!order_id){
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "order_id is required", {});
      return res.status(400).send(objResponse);
    }
  next();
}