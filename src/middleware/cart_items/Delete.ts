/**
* 
* Middleware cart_items Delete
* Middle to delete cart_items
* 
*/
import { API_RESPONSE_STATUS, patternReponse } from "../pattern/apiResponse";
import cart_items from "../../model/cart_items";
import { listOne } from "../pattern/dbMethods";

export default async (req, res, next) => {
  
    const { cart_item_id } = req.fields;

    if(!cart_item_id){
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "cart_item_id is required", {});
      return res.status(400).send(objResponse);
    }
      
    let checkcart_item_id  = await listOne(cart_items, { cart_item_id });

    // Nao permite exclusao caso já exista um registro com esse campo
    if (!checkcart_item_id  || Object.keys(checkcart_item_id ).length == 0) {
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "This cart_items not found", {});
      return res.status(400).send(objResponse);
    }
    

  next();
}