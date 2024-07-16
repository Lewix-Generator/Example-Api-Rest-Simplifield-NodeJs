/**
 * 
 * Middleware reviews List One
 * Middle to list one reviews
 * 
 */
import { API_RESPONSE_STATUS, patternReponse } from "../pattern/apiResponse";

export default async (req, res, next) => {
  
    const { review_id } = req.params;

    if(!review_id){
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "review_id is required", {});
      return res.status(400).send(objResponse);
    }
  next();
}