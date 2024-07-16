/**
* 
* Middleware addresses Delete
* Middle to delete addresses
* 
*/
import { API_RESPONSE_STATUS, patternReponse } from "../pattern/apiResponse";
import addresses from "../../model/addresses";
import { listOne } from "../pattern/dbMethods";

export default async (req, res, next) => {
  
    const { address_id } = req.fields;

    if(!address_id){
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "address_id is required", {});
      return res.status(400).send(objResponse);
    }
      
    let checkaddress_id  = await listOne(addresses, { address_id });

    // Nao permite exclusao caso já exista um registro com esse campo
    if (!checkaddress_id  || Object.keys(checkaddress_id ).length == 0) {
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "This addresses not found", {});
      return res.status(400).send(objResponse);
    }
    

  next();
}