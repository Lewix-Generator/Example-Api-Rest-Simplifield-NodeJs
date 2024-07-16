/**
 * 
 * Middleware PAYMENTS Update
 * Middle to update PAYMENTS
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
  
  if(!payment_id){
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "payment_id is required", {});
    return res.status(400).send(objResponse);
  }
  
  
   
  /**
   * 
   * Valida tamanho dos campos string
   * 
   */
  
  if(payment_method?.length < 5 || payment_method?.length > 50){
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "The payment_method field cannot be greater than 50 or less than 5!", {});
    return res.status(400).send(objResponse);
  }
  


  let obj = req.fields;

  delete obj.payment_id;
  req.fields.data = obj;
  req.fields.where = { payment_id: payment_id };


  next();
}