/**
* 
* Middleware employees Delete
* Middle to delete employees
* 
*/
import { API_RESPONSE_STATUS, patternReponse } from "../pattern/apiResponse";
import employees from "../../model/employees";
import { listOne } from "../pattern/dbMethods";

export default async (req, res, next) => {
  
    const { employee_id } = req.fields;

    if(!employee_id){
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "employee_id is required", {});
      return res.status(400).send(objResponse);
    }
      
    let checkemployee_id  = await listOne(employees, { employee_id });

    // Nao permite exclusao caso já exista um registro com esse campo
    if (!checkemployee_id  || Object.keys(checkemployee_id ).length == 0) {
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "This employees not found", {});
      return res.status(400).send(objResponse);
    }
    

  next();
}