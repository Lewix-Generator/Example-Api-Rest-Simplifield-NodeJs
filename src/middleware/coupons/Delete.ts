/**
* 
* Middleware coupons Delete
* Middle to delete coupons
* 
*/
import { API_RESPONSE_STATUS, patternReponse } from "../pattern/apiResponse";
import coupons from "../../model/coupons";
import { listOne } from "../pattern/dbMethods";

export default async (req, res, next) => {
  
    const { coupon_id } = req.fields;

    if(!coupon_id){
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "coupon_id is required", {});
      return res.status(400).send(objResponse);
    }
      
    let checkcoupon_id  = await listOne(coupons, { coupon_id });

    // Nao permite exclusao caso já exista um registro com esse campo
    if (!checkcoupon_id  || Object.keys(checkcoupon_id ).length == 0) {
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "This coupons not found", {});
      return res.status(400).send(objResponse);
    }
    

  next();
}