/**
 * 
 * Middleware roles List One
 * Middle to list one roles
 * 
 */
import { API_RESPONSE_STATUS, patternReponse } from "../pattern/apiResponse";

export default async (req, res, next) => {
  
    const { role_id } = req.params;

    if(!role_id){
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "role_id is required", {});
      return res.status(400).send(objResponse);
    }
  next();
}