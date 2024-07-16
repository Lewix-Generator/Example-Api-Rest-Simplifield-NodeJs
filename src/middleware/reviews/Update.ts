/**
 * 
 * Middleware REVIEWS Update
 * Middle to update REVIEWS
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
  
  if(!review_id){
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "review_id is required", {});
    return res.status(400).send(objResponse);
  }
  
  
   
  /**
   * 
   * Valida tamanho dos campos string
   * 
   */
  
  if(comment?.length < 5 || comment?.length > 255){
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "The comment field cannot be greater than 255 or less than 5!", {});
    return res.status(400).send(objResponse);
  }
  


  let obj = req.fields;

  delete obj.review_id;
  req.fields.data = obj;
  req.fields.where = { review_id: review_id };


  next();
}