/**
* 
* Middleware shopping_carts Delete
* Middle to delete shopping_carts
* 
*/
import { API_RESPONSE_STATUS, patternReponse } from "../pattern/apiResponse";
import shopping_carts from "../../model/shopping_carts";
import { listOne } from "../pattern/dbMethods";

export default async (req, res, next) => {
  
    const { cart_id } = req.fields;

    if(!cart_id){
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "cart_id is required", {});
      return res.status(400).send(objResponse);
    }
      
    let checkcart_id  = await listOne(shopping_carts, { cart_id });

    // Nao permite exclusao caso já exista um registro com esse campo
    if (!checkcart_id  || Object.keys(checkcart_id ).length == 0) {
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "This shopping_carts not found", {});
      return res.status(400).send(objResponse);
    }
    

  next();
}