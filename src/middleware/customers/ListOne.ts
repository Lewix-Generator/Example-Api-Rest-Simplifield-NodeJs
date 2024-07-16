/**
 * 
 * Middleware customers List One
 * Middle to list one customers
 * 
 */
import { API_RESPONSE_STATUS, patternReponse } from "../pattern/apiResponse";

export default async (req, res, next) => {
  
    const { customer_id } = req.params;

    if(!customer_id){
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "customer_id is required", {});
      return res.status(400).send(objResponse);
    }
  next();
}