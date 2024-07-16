/**
 * 
 * Middleware SHOPPING_CARTS Update
 * Middle to update SHOPPING_CARTS
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
  
  if(!cart_id){
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "cart_id is required", {});
    return res.status(400).send(objResponse);
  }
  
  
   
  /**
   * 
   * Valida tamanho dos campos string
   * 
   */
  


  let obj = req.fields;

  delete obj.cart_id;
  req.fields.data = obj;
  req.fields.where = { cart_id: cart_id };


  next();
}