/**
 * 
 * Middleware inventory List One
 * Middle to list one inventory
 * 
 */
import { API_RESPONSE_STATUS, patternReponse } from "../pattern/apiResponse";

export default async (req, res, next) => {
  
    const { inventory_id } = req.params;

    if(!inventory_id){
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "inventory_id is required", {});
      return res.status(400).send(objResponse);
    }
  next();
}