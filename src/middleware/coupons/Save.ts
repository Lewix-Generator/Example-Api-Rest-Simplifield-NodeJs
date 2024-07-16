/**
 * 
 * Middleware COUPONS Save
 * Middle to save COUPONS
 * 
 */
import { API_RESPONSE_STATUS, patternReponse } from "../pattern/apiResponse";
import { listOne } from "../pattern/dbMethods";
import coupons from "../../model/coupons";


 export default async (req, res, next) => {
  const { coupon_id, coupon_code, discount, expiration_date,  } = req.fields;
  
  /**
   * 
   * Valida registros unicos ou duplicados
   * ( !primaryKey, unique )
   * 
   */
  
  if(coupon_code) {
    // GET COUPONS
    let checkcoupon_code = await listOne(coupons, { coupon_code });

    // Nao permite cadastro caso já exista um registro com esse campo
    if (checkcoupon_code && Object.keys(checkcoupon_code).length > 0) {
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "This coupon_code is already exist", {});
      return res.status(400).send(objResponse);
    }
  }
  
  
  /**
   * 
   * Valida campos obrigatórios 
   * ( required )
   * 
   */
  
  if(!coupon_code){
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "coupon_code is required", {});
    return res.status(400).send(objResponse);
  }
  
  
   
  /**
   * 
   * Valida tamanho dos campos string
   * 
   */
  
  if(coupon_code?.length < 5 || coupon_code?.length > 50){
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "The coupon_code field cannot be greater than 50 or less than 5!", {});
    return res.status(400).send(objResponse);
  }
  
  next();
}