/**
 * 
 * Middleware shippers List One
 * Middle to list one shippers
 * 
 */
import { API_RESPONSE_STATUS, patternReponse } from "../pattern/apiResponse";

export default async (req, res, next) => {
  
    const { shipper_id } = req.params;

    if(!shipper_id){
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "shipper_id is required", {});
      return res.status(400).send(objResponse);
    }
  next();
}