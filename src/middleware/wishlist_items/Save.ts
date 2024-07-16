/**
 * 
 * Middleware WISHLIST_ITEMS Save
 * Middle to save WISHLIST_ITEMS
 * 
 */
import { API_RESPONSE_STATUS, patternReponse } from "../pattern/apiResponse";
import { listOne } from "../pattern/dbMethods";
import wishlist_items from "../../model/wishlist_items";


 export default async (req, res, next) => {
  const { wishlist_item_id, wishlist_id, product_id,  } = req.fields;
  
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