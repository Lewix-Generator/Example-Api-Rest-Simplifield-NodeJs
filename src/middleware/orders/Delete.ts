/**
* 
* Middleware orders Delete
* Middle to delete orders
* 
*/
import { API_RESPONSE_STATUS, patternReponse } from "../pattern/apiResponse";
import orders from "../../model/orders";
import { listOne } from "../pattern/dbMethods";

export default async (req, res, next) => {
  
    const { order_id } = req.fields;

    if(!order_id){
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "order_id is required", {});
      return res.status(400).send(objResponse);
    }
      
    let checkorder_id  = await listOne(orders, { order_id });

    // Nao permite exclusao caso já exista um registro com esse campo
    if (!checkorder_id  || Object.keys(checkorder_id ).length == 0) {
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "This orders not found", {});
      return res.status(400).send(objResponse);
    }
    

  next();
}