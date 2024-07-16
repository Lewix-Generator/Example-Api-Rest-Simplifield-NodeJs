/**
 * 
 * Middleware employees List One
 * Middle to list one employees
 * 
 */
import { API_RESPONSE_STATUS, patternReponse } from "../pattern/apiResponse";

export default async (req, res, next) => {
  
    const { employee_id } = req.params;

    if(!employee_id){
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "employee_id is required", {});
      return res.status(400).send(objResponse);
    }
  next();
}