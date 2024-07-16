/**
 * 
 * Middleware coupons List One
 * Middle to list one coupons
 * 
 */
import { API_RESPONSE_STATUS, patternReponse } from "../pattern/apiResponse";

export default async (req, res, next) => {
  
    const { coupon_id } = req.params;

    if(!coupon_id){
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "coupon_id is required", {});
      return res.status(400).send(objResponse);
    }
  next();
}