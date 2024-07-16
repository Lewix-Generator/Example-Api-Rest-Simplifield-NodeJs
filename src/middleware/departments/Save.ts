/**
 * 
 * Middleware DEPARTMENTS Save
 * Middle to save DEPARTMENTS
 * 
 */
import { API_RESPONSE_STATUS, patternReponse } from "../pattern/apiResponse";
import { listOne } from "../pattern/dbMethods";
import departments from "../../model/departments";


 export default async (req, res, next) => {
  const { department_id, department_name,  } = req.fields;
  
  /**
   * 
   * Valida registros unicos ou duplicados
   * ( !primaryKey, unique )
   * 
   */
  
  
  /**
   * 
   * Valida campos obrigatórios 
   * ( required )
   * 
   */
  
  if(!department_name){
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "department_name is required", {});
    return res.status(400).send(objResponse);
  }
  
  
   
  /**
   * 
   * Valida tamanho dos campos string
   * 
   */
  
  if(department_name?.length < 5 || department_name?.length > 100){
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "The department_name field cannot be greater than 100 or less than 5!", {});
    return res.status(400).send(objResponse);
  }
  
  next();
}