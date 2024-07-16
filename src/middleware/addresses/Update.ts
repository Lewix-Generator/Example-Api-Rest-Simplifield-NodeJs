/**
 * 
 * Middleware ADDRESSES Update
 * Middle to update ADDRESSES
 * 
 */
import { API_RESPONSE_STATUS, patternReponse } from "../pattern/apiResponse";
import { listOne } from "../pattern/dbMethods";
import addresses from "../../model/addresses";


 export default async (req, res, next) => {
  const { address_id, customer_id, street, city, state, postal_code, country,  } = req.fields;
  
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
  
  if(!address_id){
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "address_id is required", {});
    return res.status(400).send(objResponse);
  }
  
  
   
  /**
   * 
   * Valida tamanho dos campos string
   * 
   */
  
  if(street?.length < 5 || street?.length > 100){
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "The street field cannot be greater than 100 or less than 5!", {});
    return res.status(400).send(objResponse);
  }
  
  if(city?.length < 5 || city?.length > 50){
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "The city field cannot be greater than 50 or less than 5!", {});
    return res.status(400).send(objResponse);
  }
  
  if(state?.length < 5 || state?.length > 50){
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "The state field cannot be greater than 50 or less than 5!", {});
    return res.status(400).send(objResponse);
  }
  
  if(postal_code?.length < 5 || postal_code?.length > 20){
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "The postal_code field cannot be greater than 20 or less than 5!", {});
    return res.status(400).send(objResponse);
  }
  
  if(country?.length < 5 || country?.length > 50){
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "The country field cannot be greater than 50 or less than 5!", {});
    return res.status(400).send(objResponse);
  }
  


  let obj = req.fields;

  delete obj.address_id;
  req.fields.data = obj;
  req.fields.where = { address_id: address_id };


  next();
}