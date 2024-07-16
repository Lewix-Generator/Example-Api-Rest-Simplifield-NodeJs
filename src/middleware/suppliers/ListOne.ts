/**
 * 
 * Middleware suppliers List One
 * Middle to list one suppliers
 * 
 */
import { API_RESPONSE_STATUS, patternReponse } from "../pattern/apiResponse";

export default async (req, res, next) => {
  
    const { supplier_id } = req.params;

    if(!supplier_id){
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "supplier_id is required", {});
      return res.status(400).send(objResponse);
    }
  next();
}