/**
* 
* Middleware order_items Delete
* Middle to delete order_items
* 
*/
import { API_RESPONSE_STATUS, patternReponse } from "../pattern/apiResponse";
import order_items from "../../model/order_items";
import { listOne } from "../pattern/dbMethods";

export default async (req, res, next) => {
  
    const { order_item_id } = req.fields;

    if(!order_item_id){
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "order_item_id is required", {});
      return res.status(400).send(objResponse);
    }
      
    let checkorder_item_id  = await listOne(order_items, { order_item_id });

    // Nao permite exclusao caso já exista um registro com esse campo
    if (!checkorder_item_id  || Object.keys(checkorder_item_id ).length == 0) {
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "This order_items not found", {});
      return res.status(400).send(objResponse);
    }
    

  next();
}