/**
* 
* Middleware categories Delete
* Middle to delete categories
* 
*/
import { API_RESPONSE_STATUS, patternReponse } from "../pattern/apiResponse";
import categories from "../../model/categories";
import { listOne } from "../pattern/dbMethods";

export default async (req, res, next) => {
  
    const { category_id } = req.fields;

    if(!category_id){
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "category_id is required", {});
      return res.status(400).send(objResponse);
    }
      
    let checkcategory_id  = await listOne(categories, { category_id });

    // Nao permite exclusao caso já exista um registro com esse campo
    if (!checkcategory_id  || Object.keys(checkcategory_id ).length == 0) {
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "This categories not found", {});
      return res.status(400).send(objResponse);
    }
    

  next();
}