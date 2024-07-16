/**
 * 
 * Middleware PAYMENTS Save
 * Middle to save PAYMENTS
 * 
 */
import { API_RESPONSE_STATUS, patternReponse } from "../pattern/apiResponse";
import { listOne } from "../pattern/dbMethods";
import payments from "../../model/payments";


 export default async (req, res, next) => {
  const { payment_id, order_id, payment_date, amount, payment_method,  } = req.fields;
  
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
  
  if(payment_method?.length < 5 || payment_method?.length > 50){
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "The payment_method field cannot be greater than 50 or less than 5!", {});
    return res.status(400).send(objResponse);
  }
  
  next();
}