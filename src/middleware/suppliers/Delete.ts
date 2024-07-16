/**
* 
* Middleware suppliers Delete
* Middle to delete suppliers
* 
*/
import { API_RESPONSE_STATUS, patternReponse } from "../pattern/apiResponse";
import suppliers from "../../model/suppliers";
import { listOne } from "../pattern/dbMethods";

export default async (req, res, next) => {
  
    const { supplier_id } = req.fields;

    if(!supplier_id){
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "supplier_id is required", {});
      return res.status(400).send(objResponse);
    }
      
    let checksupplier_id  = await listOne(suppliers, { supplier_id });

    // Nao permite exclusao caso já exista um registro com esse campo
    if (!checksupplier_id  || Object.keys(checksupplier_id ).length == 0) {
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "This suppliers not found", {});
      return res.status(400).send(objResponse);
    }
    

  next();
}