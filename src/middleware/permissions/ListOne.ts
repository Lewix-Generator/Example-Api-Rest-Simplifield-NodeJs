/**
 * 
 * Middleware permissions List One
 * Middle to list one permissions
 * 
 */
import { API_RESPONSE_STATUS, patternReponse } from "../pattern/apiResponse";

export default async (req, res, next) => {
  
    const { permission_id } = req.params;

    if(!permission_id){
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "permission_id is required", {});
      return res.status(400).send(objResponse);
    }
  next();
}