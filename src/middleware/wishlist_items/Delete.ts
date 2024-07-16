/**
* 
* Middleware wishlist_items Delete
* Middle to delete wishlist_items
* 
*/
import { API_RESPONSE_STATUS, patternReponse } from "../pattern/apiResponse";
import wishlist_items from "../../model/wishlist_items";
import { listOne } from "../pattern/dbMethods";

export default async (req, res, next) => {
  
    const { wishlist_item_id } = req.fields;

    if(!wishlist_item_id){
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "wishlist_item_id is required", {});
      return res.status(400).send(objResponse);
    }
      
    let checkwishlist_item_id  = await listOne(wishlist_items, { wishlist_item_id });

    // Nao permite exclusao caso já exista um registro com esse campo
    if (!checkwishlist_item_id  || Object.keys(checkwishlist_item_id ).length == 0) {
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "This wishlist_items not found", {});
      return res.status(400).send(objResponse);
    }
    

  next();
}