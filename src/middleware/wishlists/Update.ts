/**
 * 
 * Middleware WISHLISTS Update
 * Middle to update WISHLISTS
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
  
  if(!wishlist_id){
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "wishlist_id is required", {});
    return res.status(400).send(objResponse);
  }
  
  
   
  /**
   * 
   * Valida tamanho dos campos string
   * 
   */
  


  let obj = req.fields;

  delete obj.wishlist_id;
  req.fields.data = obj;
  req.fields.where = { wishlist_id: wishlist_id };


  next();
}