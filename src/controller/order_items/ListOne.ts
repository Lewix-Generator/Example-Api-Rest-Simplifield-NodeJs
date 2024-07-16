/**
* Import modules
*/
import order_items from "../../model/order_items";
import { API_RESPONSE_STATUS, patternReponse } from "../../middleware/pattern/apiResponse";
import { listOne } from "../../middleware/pattern/dbMethods";
export default async (req, res) => {
  await listOne(order_items, req.params)
  .then(async (result:any) => {
    
    if(result){

      /**
       * Build response success
       */
      let objResponse = patternReponse(API_RESPONSE_STATUS['success'], "ORDER_ITEMS LIST ONE SUCCESS", result);
      return res.send(objResponse);
      
    }else{

      /**
       * Build response not found
       */
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "ORDER_ITEMS LIST ONE NOT FOUND", {});
      return res.send(objResponse);
    }

  }).catch(err => {

    /**
     * Build response error
     */
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "ORDER_ITEMS LIST ONE ERROR", err);
    return res.send(objResponse);

  });
}