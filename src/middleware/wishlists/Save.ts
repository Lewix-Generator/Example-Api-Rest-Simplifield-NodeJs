/**
 * 
 * Middleware WISHLISTS Save
 * Middle to save WISHLISTS
 * 
 */
import { API_RESPONSE_STATUS, patternReponse } from "../pattern/apiResponse";
import { listOne } from "../pattern/dbMethods";
import wishlists from "../../model/wishlists";


 export default async (req, res, next) => {
  const { wishlist_id, customer_id, created_at,  } = req.fields;
  
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