/**
 * 
 * Middleware ORDER_ITEMS Update
 * Middle to update ORDER_ITEMS
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
  
  if(!order_item_id){
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "order_item_id is required", {});
    return res.status(400).send(objResponse);
  }
  
  
   
  /**
   * 
   * Valida tamanho dos campos string
   * 
   */
  


  let obj = req.fields;

  delete obj.order_item_id;
  req.fields.data = obj;
  req.fields.where = { order_item_id: order_item_id };


  next();
}