/**
* Import modules
*/
import coupons from "../../model/coupons";
import { API_RESPONSE_STATUS, patternReponse } from "../../middleware/pattern/apiResponse";
import { list, listOne } from "../../middleware/pattern/dbMethods";
export default async (req, res) => { 

  await list( coupons, req.query )
  .then(async (result:any) => {
    
      
    /**
     * Build response success
     */
    let objResponse = patternReponse(API_RESPONSE_STATUS['success'], "COUPONS LIST SUCCESS", result);
    return res.send(objResponse);


  }).catch(err => {

    /**
     * Build response error
     */
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "COUPONS LIST ERROR", err);
    return res.send(objResponse);

  });

}