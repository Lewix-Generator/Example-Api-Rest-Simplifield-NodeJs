/**
* Import modules
*/
import cart_items from "../../model/cart_items";
import { API_RESPONSE_STATUS, patternReponse } from "../../middleware/pattern/apiResponse";
import { list, listOne } from "../../middleware/pattern/dbMethods";
export default async (req, res) => { 

  await list( cart_items, req.query )
  .then(async (result:any) => {
    
      
    /**
     * Build response success
     */
    let objResponse = patternReponse(API_RESPONSE_STATUS['success'], "CART_ITEMS LIST SUCCESS", result);
    return res.send(objResponse);


  }).catch(err => {

    /**
     * Build response error
     */
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "CART_ITEMS LIST ERROR", err);
    return res.send(objResponse);

  });

}