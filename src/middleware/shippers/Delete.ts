/**
* 
* Middleware shippers Delete
* Middle to delete shippers
* 
*/
import { API_RESPONSE_STATUS, patternReponse } from "../pattern/apiResponse";
import shippers from "../../model/shippers";
import { listOne } from "../pattern/dbMethods";

export default async (req, res, next) => {
  
    const { shipper_id } = req.fields;

    if(!shipper_id){
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "shipper_id is required", {});
      return res.status(400).send(objResponse);
    }
      
    let checkshipper_id  = await listOne(shippers, { shipper_id });

    // Nao permite exclusao caso já exista um registro com esse campo
    if (!checkshipper_id  || Object.keys(checkshipper_id ).length == 0) {
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "This shippers not found", {});
      return res.status(400).send(objResponse);
    }
    

  next();
}