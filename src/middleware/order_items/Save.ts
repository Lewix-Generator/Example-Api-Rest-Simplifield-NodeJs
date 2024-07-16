/**
 * 
 * Middleware ORDER_ITEMS Save
 * Middle to save ORDER_ITEMS
 * 
 */
import { API_RESPONSE_STATUS, patternReponse } from "../pattern/apiResponse";
import { listOne } from "../pattern/dbMethods";
import order_items from "../../model/order_items";


 export default async (req, res, next) => {
  const { order_item_id, order_id, product_id, quantity, price,  } = req.fields;
  
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