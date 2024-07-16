/**
 * 
 * Middleware CART_ITEMS Update
 * Middle to update CART_ITEMS
 * 
 */
import { API_RESPONSE_STATUS, patternReponse } from "../pattern/apiResponse";
import { listOne } from "../pattern/dbMethods";
import cart_items from "../../model/cart_items";


 export default async (req, res, next) => {
  const { cart_item_id, cart_id, product_id, quantity,  } = req.fields;
  
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
  
  if(!cart_item_id){
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "cart_item_id is required", {});
    return res.status(400).send(objResponse);
  }
  
  
   
  /**
   * 
   * Valida tamanho dos campos string
   * 
   */
  


  let obj = req.fields;

  delete obj.cart_item_id;
  req.fields.data = obj;
  req.fields.where = { cart_item_id: cart_item_id };


  next();
}