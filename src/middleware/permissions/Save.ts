/**
 * 
 * Middleware PERMISSIONS Save
 * Middle to save PERMISSIONS
 * 
 */
import { API_RESPONSE_STATUS, patternReponse } from "../pattern/apiResponse";
import { listOne } from "../pattern/dbMethods";
import permissions from "../../model/permissions";


 export default async (req, res, next) => {
  const { permission_id, permission_name,  } = req.fields;
  
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
  
  if(!permission_name){
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "permission_name is required", {});
    return res.status(400).send(objResponse);
  }
  
  
   
  /**
   * 
   * Valida tamanho dos campos string
   * 
   */
  
  if(permission_name?.length < 5 || permission_name?.length > 100){
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "The permission_name field cannot be greater than 100 or less than 5!", {});
    return res.status(400).send(objResponse);
  }
  
  next();
}