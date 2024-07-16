/**
* 
* Middleware wishlists Delete
* Middle to delete wishlists
* 
*/
import { API_RESPONSE_STATUS, patternReponse } from "../pattern/apiResponse";
import wishlists from "../../model/wishlists";
import { listOne } from "../pattern/dbMethods";

export default async (req, res, next) => {
  
    const { wishlist_id } = req.fields;

    if(!wishlist_id){
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "wishlist_id is required", {});
      return res.status(400).send(objResponse);
    }
      
    let checkwishlist_id  = await listOne(wishlists, { wishlist_id });

    // Nao permite exclusao caso já exista um registro com esse campo
    if (!checkwishlist_id  || Object.keys(checkwishlist_id ).length == 0) {
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "This wishlists not found", {});
      return res.status(400).send(objResponse);
    }
    

  next();
}