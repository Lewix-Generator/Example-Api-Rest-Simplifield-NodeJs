/**
 * 
 * Middleware departments List One
 * Middle to list one departments
 * 
 */
import { API_RESPONSE_STATUS, patternReponse } from "../pattern/apiResponse";

export default async (req, res, next) => {
  
    const { department_id } = req.params;

    if(!department_id){
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "department_id is required", {});
      return res.status(400).send(objResponse);
    }
  next();
}