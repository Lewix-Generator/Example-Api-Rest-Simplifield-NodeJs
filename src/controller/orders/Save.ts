/**
* Import modules
*/
import orders from "../../model/orders";
import { API_RESPONSE_STATUS, patternReponse } from "../../middleware/pattern/apiResponse";
import { save, listOne } from "../../middleware/pattern/dbMethods";


export default async (req, res) => { 

  
// save
await save( orders, req.fields )
.then( async (result:any) => {

  if(result){
    /**
     * Build response success
     */
    let objResponse = patternReponse(API_RESPONSE_STATUS['success'], "ORDERS SAVE SUCCESS", result);
    return res.send(objResponse);
    
  }else{

    /**
     * Build response not found
     */
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "ORDERS SAVE ERROR", result);
    return res.send(objResponse);
  }

}).catch(err => {

  /**
   * Build response error
   */
  let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "ORDERS SAVE ERROR", err);
  return res.send(objResponse);

});

}