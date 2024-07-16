/**
 * 
 * Middleware CUSTOMERS Update
 * Middle to update CUSTOMERS
 * 
 */
import { API_RESPONSE_STATUS, patternReponse } from "../pattern/apiResponse";
import { listOne } from "../pattern/dbMethods";
import customers from "../../model/customers";


 export default async (req, res, next) => {
  const { customer_id, first_name, last_name, email, phone, created_at,  } = req.fields;
  
  /**
   * 
   * Valida registros unicos ou duplicados
   * ( !primaryKey, unique )
   * 
   */
  
  if(email) {
    // GET CUSTOMERS
    let checkemail = await listOne(customers, { email });

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
  
  if(!customer_id){
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "customer_id is required", {});
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

  delete obj.customer_id;
  req.fields.data = obj;
  req.fields.where = { customer_id: customer_id };


  next();
}