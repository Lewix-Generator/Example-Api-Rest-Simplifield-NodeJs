/**
 * 
 * Middleware payments List One
 * Middle to list one payments
 * 
 */
import { API_RESPONSE_STATUS, patternReponse } from "../pattern/apiResponse";

export default async (req, res, next) => {
  
    const { payment_id } = req.params;

    if(!payment_id){
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "payment_id is required", {});
      return res.status(400).send(objResponse);
    }
  next();
}