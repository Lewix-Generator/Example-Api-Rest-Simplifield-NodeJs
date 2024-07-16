/**
* Import modules
*/
import departments from "../../model/departments";
import { API_RESPONSE_STATUS, patternReponse } from "../../middleware/pattern/apiResponse";
import { update, listOne } from "../../middleware/pattern/dbMethods";


export default async (req, res) => {
  
  await update(departments, req.fields.data, req.fields.where)
  .then(result => {
    if(result){

      /**
       * Build response success
       */
      let objResponse = patternReponse(API_RESPONSE_STATUS['success'], "DEPARTMENTS UPDATE SUCCESS", result);
      return res.send(objResponse);
      
    }else{
  
      /**
       * Build response not found
       */
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "DEPARTMENTS UPDATE ERROR", result);
      return res.send(objResponse);
    }
  
  }).catch(err => {
  
    /**
     * Build response error
     */
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "DEPARTMENTS UPDATE ERROR", err);
    return res.send(objResponse);
  
  });
}