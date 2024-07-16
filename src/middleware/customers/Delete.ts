/**
* 
* Middleware customers Delete
* Middle to delete customers
* 
*/
import { API_RESPONSE_STATUS, patternReponse } from "../pattern/apiResponse";
import customers from "../../model/customers";
import { listOne } from "../pattern/dbMethods";

export default async (req, res, next) => {
  
    const { customer_id } = req.fields;

    if(!customer_id){
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "customer_id is required", {});
      return res.status(400).send(objResponse);
    }
      
    let checkcustomer_id  = await listOne(customers, { customer_id });

    // Nao permite exclusao caso já exista um registro com esse campo
    if (!checkcustomer_id  || Object.keys(checkcustomer_id ).length == 0) {
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "This customers not found", {});
      return res.status(400).send(objResponse);
    }
    

  next();
}