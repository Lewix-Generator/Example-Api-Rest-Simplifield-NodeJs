/**
* 
* Middleware products Delete
* Middle to delete products
* 
*/
import { API_RESPONSE_STATUS, patternReponse } from "../pattern/apiResponse";
import products from "../../model/products";
import { listOne } from "../pattern/dbMethods";

export default async (req, res, next) => {
  
    const { product_id } = req.fields;

    if(!product_id){
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "product_id is required", {});
      return res.status(400).send(objResponse);
    }
      
    let checkproduct_id  = await listOne(products, { product_id });

    // Nao permite exclusao caso já exista um registro com esse campo
    if (!checkproduct_id  || Object.keys(checkproduct_id ).length == 0) {
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "This products not found", {});
      return res.status(400).send(objResponse);
    }
    

  next();
}