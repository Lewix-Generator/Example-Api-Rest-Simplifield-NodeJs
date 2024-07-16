/**
 * 
 * Middleware REVIEWS Save
 * Middle to save REVIEWS
 * 
 */
import { API_RESPONSE_STATUS, patternReponse } from "../pattern/apiResponse";
import { listOne } from "../pattern/dbMethods";
import reviews from "../../model/reviews";


 export default async (req, res, next) => {
  const { review_id, product_id, customer_id, review_date, rating, comment,  } = req.fields;
  
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
  
  if(comment?.length < 5 || comment?.length > 255){
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "The comment field cannot be greater than 255 or less than 5!", {});
    return res.status(400).send(objResponse);
  }
  
  next();
}