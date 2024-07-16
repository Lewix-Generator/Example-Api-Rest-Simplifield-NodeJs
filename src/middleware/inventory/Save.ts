/**
 * 
 * Middleware INVENTORY Save
 * Middle to save INVENTORY
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
  
  
   
  /**
   * 
   * Valida tamanho dos campos string
   * 
   */
  
  next();
}