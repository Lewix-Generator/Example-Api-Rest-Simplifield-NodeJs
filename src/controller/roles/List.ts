/**
* Import modules
*/
import roles from "../../model/roles";
import { API_RESPONSE_STATUS, patternReponse } from "../../middleware/pattern/apiResponse";
import { list, listOne } from "../../middleware/pattern/dbMethods";
export default async (req, res) => { 

  await list( roles, req.query )
  .then(async (result:any) => {
    
      
    /**
     * Build response success
     */
    let objResponse = patternReponse(API_RESPONSE_STATUS['success'], "ROLES LIST SUCCESS", result);
    return res.send(objResponse);


  }).catch(err => {

    /**
     * Build response error
     */
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "ROLES LIST ERROR", err);
    return res.send(objResponse);

  });

}