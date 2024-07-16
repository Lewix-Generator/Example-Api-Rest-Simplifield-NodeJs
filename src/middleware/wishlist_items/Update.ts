/**
 * 
 * Middleware WISHLIST_ITEMS Update
 * Middle to update WISHLIST_ITEMS
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
  
  if(!wishlist_item_id){
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "wishlist_item_id is required", {});
    return res.status(400).send(objResponse);
  }
  
  
   
  /**
   * 
   * Valida tamanho dos campos string
   * 
   */
  


  let obj = req.fields;

  delete obj.wishlist_item_id;
  req.fields.data = obj;
  req.fields.where = { wishlist_item_id: wishlist_item_id };


  next();
}