/**
 * 
 * Middleware ORDERS Update
 * Middle to update ORDERS
 * 
 */
import { API_RESPONSE_STATUS, patternReponse } from "../pattern/apiResponse";
import { listOne } from "../pattern/dbMethods";
import orders from "../../model/orders";


 export default async (req, res, next) => {
  const { order_id, customer_id, order_date, status, total,  } = req.fields;
  
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
  
  if(!order_id){
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "order_id is required", {});
    return res.status(400).send(objResponse);
  }
  
  
   
  /**
   * 
   * Valida tamanho dos campos string
   * 
   */
  
  if(status?.length < 5 || status?.length > 50){
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "The status field cannot be greater than 50 or less than 5!", {});
    return res.status(400).send(objResponse);
  }
  


  let obj = req.fields;

  delete obj.order_id;
  req.fields.data = obj;
  req.fields.where = { order_id: order_id };


  next();
}