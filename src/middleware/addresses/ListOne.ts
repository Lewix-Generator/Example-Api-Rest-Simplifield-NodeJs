/**
 * 
 * Middleware addresses List One
 * Middle to list one addresses
 * 
 */
import { API_RESPONSE_STATUS, patternReponse } from "../pattern/apiResponse";

export default async (req, res, next) => {
  
    const { address_id } = req.params;

    if(!address_id){
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "address_id is required", {});
      return res.status(400).send(objResponse);
    }
  next();
}