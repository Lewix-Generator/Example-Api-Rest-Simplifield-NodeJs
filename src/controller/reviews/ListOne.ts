/**
* Import modules
*/
import reviews from "../../model/reviews";
import { API_RESPONSE_STATUS, patternReponse } from "../../middleware/pattern/apiResponse";
import { listOne } from "../../middleware/pattern/dbMethods";
export default async (req, res) => {
  await listOne(reviews, req.params)
  .then(async (result:any) => {
    
    if(result){

      /**
       * Build response success
       */
      let objResponse = patternReponse(API_RESPONSE_STATUS['success'], "REVIEWS LIST ONE SUCCESS", result);
      return res.send(objResponse);
      
    }else{

      /**
       * Build response not found
       */
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "REVIEWS LIST ONE NOT FOUND", {});
      return res.send(objResponse);
    }

  }).catch(err => {

    /**
     * Build response error
     */
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "REVIEWS LIST ONE ERROR", err);
    return res.send(objResponse);

  });
}