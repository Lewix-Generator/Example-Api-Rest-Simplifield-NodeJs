/**
* 
* Middleware payments Delete
* Middle to delete payments
* 
*/
import { API_RESPONSE_STATUS, patternReponse } from "../pattern/apiResponse";
import payments from "../../model/payments";
import { listOne } from "../pattern/dbMethods";

export default async (req, res, next) => {
  
    const { payment_id } = req.fields;

    if(!payment_id){
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "payment_id is required", {});
      return res.status(400).send(objResponse);
    }
      
    let checkpayment_id  = await listOne(payments, { payment_id });

    // Nao permite exclusao caso já exista um registro com esse campo
    if (!checkpayment_id  || Object.keys(checkpayment_id ).length == 0) {
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "This payments not found", {});
      return res.status(400).send(objResponse);
    }
    

  next();
}