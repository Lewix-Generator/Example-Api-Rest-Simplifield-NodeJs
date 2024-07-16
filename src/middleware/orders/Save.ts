/**
 * 
 * Middleware ORDERS Save
 * Middle to save ORDERS
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
  
  
   
  /**
   * 
   * Valida tamanho dos campos string
   * 
   */
  
  if(status?.length < 5 || status?.length > 50){
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "The status field cannot be greater than 50 or less than 5!", {});
    return res.status(400).send(objResponse);
  }
  
  next();
}