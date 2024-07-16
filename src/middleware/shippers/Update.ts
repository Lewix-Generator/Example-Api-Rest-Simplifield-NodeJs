/**
 * 
 * Middleware SHIPPERS Update
 * Middle to update SHIPPERS
 * 
 */
import { API_RESPONSE_STATUS, patternReponse } from "../pattern/apiResponse";
import { listOne } from "../pattern/dbMethods";
import shippers from "../../model/shippers";


 export default async (req, res, next) => {
  const { shipper_id, shipper_name, contact_name, contact_email, contact_phone,  } = req.fields;
  
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
  
  if(!shipper_id){
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "shipper_id is required", {});
    return res.status(400).send(objResponse);
  }
  
  if(!shipper_name){
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "shipper_name is required", {});
    return res.status(400).send(objResponse);
  }
  
  
   
  /**
   * 
   * Valida tamanho dos campos string
   * 
   */
  
  if(shipper_name?.length < 5 || shipper_name?.length > 100){
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "The shipper_name field cannot be greater than 100 or less than 5!", {});
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
  


  let obj = req.fields;

  delete obj.shipper_id;
  req.fields.data = obj;
  req.fields.where = { shipper_id: shipper_id };


  next();
}