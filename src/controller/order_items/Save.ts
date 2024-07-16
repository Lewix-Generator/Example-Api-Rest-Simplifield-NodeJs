/**
* Import modules
*/
import order_items from "../../model/order_items";
import { API_RESPONSE_STATUS, patternReponse } from "../../middleware/pattern/apiResponse";
import { save, listOne } from "../../middleware/pattern/dbMethods";


export default async (req, res) => { 

  
// save
await save( order_items, req.fields )
.then( async (result:any) => {

  if(result){
    /**
     * Build response success
     */
    let objResponse = patternReponse(API_RESPONSE_STATUS['success'], "ORDER_ITEMS SAVE SUCCESS", result);
    return res.send(objResponse);
    
  }else{

    /**
     * Build response not found
     */
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "ORDER_ITEMS SAVE ERROR", result);
    return res.send(objResponse);
  }

}).catch(err => {

  /**
   * Build response error
   */
  let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "ORDER_ITEMS SAVE ERROR", err);
  return res.send(objResponse);

});

}