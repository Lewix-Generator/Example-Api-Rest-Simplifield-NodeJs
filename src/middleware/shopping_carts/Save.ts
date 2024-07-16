/**
 * 
 * Middleware SHOPPING_CARTS Save
 * Middle to save SHOPPING_CARTS
 * 
 */
import { API_RESPONSE_STATUS, patternReponse } from "../pattern/apiResponse";
import { listOne } from "../pattern/dbMethods";
import shopping_carts from "../../model/shopping_carts";


 export default async (req, res, next) => {
  const { cart_id, customer_id, created_at,  } = req.fields;
  
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