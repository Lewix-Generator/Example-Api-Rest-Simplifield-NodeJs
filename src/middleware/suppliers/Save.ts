/**
 * 
 * Middleware SUPPLIERS Save
 * Middle to save SUPPLIERS
 * 
 */
import { API_RESPONSE_STATUS, patternReponse } from "../pattern/apiResponse";
import { listOne } from "../pattern/dbMethods";
import suppliers from "../../model/suppliers";


 export default async (req, res, next) => {
  const { supplier_id, supplier_name, contact_name, contact_email, contact_phone,  } = req.fields;
  
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
  
  if(!supplier_name){
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "supplier_name is required", {});
    return res.status(400).send(objResponse);
  }
  
  
   
  /**
   * 
   * Valida tamanho dos campos string
   * 
   */
  
  if(supplier_name?.length < 5 || supplier_name?.length > 100){
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "The supplier_name field cannot be greater than 100 or less than 5!", {});
    return res.status(400).send(objResponse);
  }
  
  if(contact_name?.length < 5 || contact_name?.length > 100){
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "The contact_name field cannot be greater than 100 or less than 5!", {});
    return res.status(400).send(objResponse);
  }
  
  if(contact_email?.length < 5 || contact_email?.length > 100){
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "The contact_email field cannot be greater than 100 or less than 5!", {});
    return res.status(400).send(objResponse);
  }
  
  if(contact_phone?.length < 5 || contact_phone?.length > 15){
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "The contact_phone field cannot be greater than 15 or less than 5!", {});
    return res.status(400).send(objResponse);
  }
  
  next();
}