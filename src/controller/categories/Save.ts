/**
* Import modules
*/
import categories from "../../model/categories";
import { API_RESPONSE_STATUS, patternReponse } from "../../middleware/pattern/apiResponse";
import { save, listOne } from "../../middleware/pattern/dbMethods";


export default async (req, res) => { 

  
// save
await save( categories, req.fields )
.then( async (result:any) => {

  if(result){
    /**
     * Build response success
     */
    let objResponse = patternReponse(API_RESPONSE_STATUS['success'], "CATEGORIES SAVE SUCCESS", result);
    return res.send(objResponse);
    
  }else{

    /**
     * Build response not found
     */
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "CATEGORIES SAVE ERROR", result);
    return res.send(objResponse);
  }

}).catch(err => {

  /**
   * Build response error
   */
  let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "CATEGORIES SAVE ERROR", err);
  return res.send(objResponse);

});

}