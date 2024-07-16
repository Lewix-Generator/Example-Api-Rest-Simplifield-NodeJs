/**
* Import modules
*/
import employees from "../../model/employees";
import { API_RESPONSE_STATUS, patternReponse } from "../../middleware/pattern/apiResponse";
import { listOne } from "../../middleware/pattern/dbMethods";
export default async (req, res) => {
  await listOne(employees, req.params)
  .then(async (result:any) => {
    
    if(result){

      /**
       * Build response success
       */
      let objResponse = patternReponse(API_RESPONSE_STATUS['success'], "EMPLOYEES LIST ONE SUCCESS", result);
      return res.send(objResponse);
      
    }else{

      /**
       * Build response not found
       */
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "EMPLOYEES LIST ONE NOT FOUND", {});
      return res.send(objResponse);
    }

  }).catch(err => {

    /**
     * Build response error
     */
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "EMPLOYEES LIST ONE ERROR", err);
    return res.send(objResponse);

  });
}