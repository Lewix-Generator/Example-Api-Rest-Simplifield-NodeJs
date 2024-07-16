/**
* 
* Middleware roles Delete
* Middle to delete roles
* 
*/
import { API_RESPONSE_STATUS, patternReponse } from "../pattern/apiResponse";
import roles from "../../model/roles";
import { listOne } from "../pattern/dbMethods";

export default async (req, res, next) => {
  
    const { role_id } = req.fields;

    if(!role_id){
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "role_id is required", {});
      return res.status(400).send(objResponse);
    }
      
    let checkrole_id  = await listOne(roles, { role_id });

    // Nao permite exclusao caso já exista um registro com esse campo
    if (!checkrole_id  || Object.keys(checkrole_id ).length == 0) {
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "This roles not found", {});
      return res.status(400).send(objResponse);
    }
    

  next();
}