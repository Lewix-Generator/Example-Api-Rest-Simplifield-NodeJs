/**
* 
* Middleware inventory Delete
* Middle to delete inventory
* 
*/
import { API_RESPONSE_STATUS, patternReponse } from "../pattern/apiResponse";
import inventory from "../../model/inventory";
import { listOne } from "../pattern/dbMethods";

export default async (req, res, next) => {
  
    const { inventory_id } = req.fields;

    if(!inventory_id){
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "inventory_id is required", {});
      return res.status(400).send(objResponse);
    }
      
    let checkinventory_id  = await listOne(inventory, { inventory_id });

    // Nao permite exclusao caso já exista um registro com esse campo
    if (!checkinventory_id  || Object.keys(checkinventory_id ).length == 0) {
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "This inventory not found", {});
      return res.status(400).send(objResponse);
    }
    

  next();
}