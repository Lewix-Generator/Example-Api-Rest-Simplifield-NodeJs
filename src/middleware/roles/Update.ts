/**
 * 
 * Middleware ROLES Update
 * Middle to update ROLES
 * 
 */
import { API_RESPONSE_STATUS, patternReponse } from "../pattern/apiResponse";
import { listOne } from "../pattern/dbMethods";
import roles from "../../model/roles";


 export default async (req, res, next) => {
  const { role_id, role_name,  } = req.fields;
  
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
  
  if(!role_id){
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "role_id is required", {});
    return res.status(400).send(objResponse);
  }
  
  if(!role_name){
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "role_name is required", {});
    return res.status(400).send(objResponse);
  }
  
  
   
  /**
   * 
   * Valida tamanho dos campos string
   * 
   */
  
  if(role_name?.length < 5 || role_name?.length > 100){
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "The role_name field cannot be greater than 100 or less than 5!", {});
    return res.status(400).send(objResponse);
  }
  


  let obj = req.fields;

  delete obj.role_id;
  req.fields.data = obj;
  req.fields.where = { role_id: role_id };


  next();
}