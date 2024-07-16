/**
 * 
 * Middleware EMPLOYEES Update
 * Middle to update EMPLOYEES
 * 
 */
import { API_RESPONSE_STATUS, patternReponse } from "../pattern/apiResponse";
import { listOne } from "../pattern/dbMethods";
import employees from "../../model/employees";


 export default async (req, res, next) => {
  const { employee_id, first_name, last_name, email, phone, hire_date, department_id, role_id,  } = req.fields;
  
  /**
   * 
   * Valida registros unicos ou duplicados
   * ( !primaryKey, unique )
   * 
   */
  
  if(email) {
    // GET EMPLOYEES
    let checkemail = await listOne(employees, { email });

    // Nao permite cadastro caso já exista um registro com esse campo
    if (checkemail && Object.keys(checkemail).length > 0) {
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "This email is already exist", {});
      return res.status(400).send(objResponse);
    }
  }
  
  
  /**
   * 
   * Valida campos obrigatórios 
   * ( required )
   * 
   */
  
  if(!employee_id){
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "employee_id is required", {});
    return res.status(400).send(objResponse);
  }
  
  if(!first_name){
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "first_name is required", {});
    return res.status(400).send(objResponse);
  }
  
  if(!last_name){
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "last_name is required", {});
    return res.status(400).send(objResponse);
  }
  
  if(!email){
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "email is required", {});
    return res.status(400).send(objResponse);
  }
  
  
   
  /**
   * 
   * Valida tamanho dos campos string
   * 
   */
  
  if(first_name?.length < 5 || first_name?.length > 50){
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "The first_name field cannot be greater than 50 or less than 5!", {});
    return res.status(400).send(objResponse);
  }
  
  if(last_name?.length < 5 || last_name?.length > 50){
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "The last_name field cannot be greater than 50 or less than 5!", {});
    return res.status(400).send(objResponse);
  }
  
  if(email?.length < 5 || email?.length > 100){
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "The email field cannot be greater than 100 or less than 5!", {});
    return res.status(400).send(objResponse);
  }
  
  if(phone?.length < 5 || phone?.length > 15){
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "The phone field cannot be greater than 15 or less than 5!", {});
    return res.status(400).send(objResponse);
  }
  


  let obj = req.fields;

  delete obj.employee_id;
  req.fields.data = obj;
  req.fields.where = { employee_id: employee_id };


  next();
}