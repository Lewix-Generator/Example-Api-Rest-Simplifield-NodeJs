/**
 * 
 * Middleware categories List One
 * Middle to list one categories
 * 
 */
import { API_RESPONSE_STATUS, patternReponse } from "../pattern/apiResponse";

export default async (req, res, next) => {
  
    const { category_id } = req.params;

    if(!category_id){
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "category_id is required", {});
      return res.status(400).send(objResponse);
    }
  next();
}