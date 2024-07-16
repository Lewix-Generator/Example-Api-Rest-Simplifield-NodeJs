/**
 * 
 * Middleware INVENTORY Update
 * Middle to update INVENTORY
 * 
 */
import { API_RESPONSE_STATUS, patternReponse } from "../pattern/apiResponse";
import { listOne } from "../pattern/dbMethods";
import inventory from "../../model/inventory";


 export default async (req, res, next) => {
  const { inventory_id, product_id, quantity, last_updated,  } = req.fields;
  
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
  
  if(!inventory_id){
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "inventory_id is required", {});
    return res.status(400).send(objResponse);
  }
  
  
   
  /**
   * 
   * Valida tamanho dos campos string
   * 
   */
  


  let obj = req.fields;

  delete obj.inventory_id;
  req.fields.data = obj;
  req.fields.where = { inventory_id: inventory_id };


  next();
}