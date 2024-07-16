/**
* 
* Middleware departments Delete
* Middle to delete departments
* 
*/
import { API_RESPONSE_STATUS, patternReponse } from "../pattern/apiResponse";
import departments from "../../model/departments";
import { listOne } from "../pattern/dbMethods";

export default async (req, res, next) => {
  
    const { department_id } = req.fields;

    if(!department_id){
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "department_id is required", {});
      return res.status(400).send(objResponse);
    }
      
    let checkdepartment_id  = await listOne(departments, { department_id });

    // Nao permite exclusao caso já exista um registro com esse campo
    if (!checkdepartment_id  || Object.keys(checkdepartment_id ).length == 0) {
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "This departments not found", {});
      return res.status(400).send(objResponse);
    }
    

  next();
}