/**
* 
* Middleware reviews Delete
* Middle to delete reviews
* 
*/
import { API_RESPONSE_STATUS, patternReponse } from "../pattern/apiResponse";
import reviews from "../../model/reviews";
import { listOne } from "../pattern/dbMethods";

export default async (req, res, next) => {
  
    const { review_id } = req.fields;

    if(!review_id){
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "review_id is required", {});
      return res.status(400).send(objResponse);
    }
      
    let checkreview_id  = await listOne(reviews, { review_id });

    // Nao permite exclusao caso já exista um registro com esse campo
    if (!checkreview_id  || Object.keys(checkreview_id ).length == 0) {
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "This reviews not found", {});
      return res.status(400).send(objResponse);
    }
    

  next();
}