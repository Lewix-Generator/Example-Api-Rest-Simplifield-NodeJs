/**
 * 
 * Middleware PRODUCTS Save
 * Middle to save PRODUCTS
 * 
 */
import { API_RESPONSE_STATUS, patternReponse } from "../pattern/apiResponse";
import { listOne } from "../pattern/dbMethods";
import products from "../../model/products";


 export default async (req, res, next) => {
  const { product_id, product_name, description, price, stock, category_id, supplier_id,  } = req.fields;
  
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
  
  if(!product_name){
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "product_name is required", {});
    return res.status(400).send(objResponse);
  }
  
  if(!price){
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "price is required", {});
    return res.status(400).send(objResponse);
  }
  
  
   
  /**
   * 
   * Valida tamanho dos campos string
   * 
   */
  
  if(product_name?.length < 5 || product_name?.length > 100){
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "The product_name field cannot be greater than 100 or less than 5!", {});
    return res.status(400).send(objResponse);
  }
  
  if(description?.length < 5 || description?.length > 255){
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "The description field cannot be greater than 255 or less than 5!", {});
    return res.status(400).send(objResponse);
  }
  
  next();
}