/**
 * 
 * Middleware CATEGORIES Update
 * Middle to update CATEGORIES
 * 
 */
import { API_RESPONSE_STATUS, patternReponse } from "../pattern/apiResponse";
import { listOne } from "../pattern/dbMethods";
import categories from "../../model/categories";


 export default async (req, res, next) => {
  const { category_id, category_name,  } = req.fields;
  
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
  
  if(!category_id){
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "category_id is required", {});
    return res.status(400).send(objResponse);
  }
  
  if(!category_name){
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "category_name is required", {});
    return res.status(400).send(objResponse);
  }
  
  
   
  /**
   * 
   * Valida tamanho dos campos string
   * 
   */
  
  if(category_name?.length < 5 || category_name?.length > 100){
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "The category_name field cannot be greater than 100 or less than 5!", {});
    return res.status(400).send(objResponse);
  }
  


  let obj = req.fields;

  delete obj.category_id;
  req.fields.data = obj;
  req.fields.where = { category_id: category_id };


  next();
}