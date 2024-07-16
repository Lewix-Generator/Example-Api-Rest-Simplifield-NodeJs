/**
* 
* Middleware permissions Delete
* Middle to delete permissions
* 
*/
import { API_RESPONSE_STATUS, patternReponse } from "../pattern/apiResponse";
import permissions from "../../model/permissions";
import { listOne } from "../pattern/dbMethods";

export default async (req, res, next) => {
  
    const { permission_id } = req.fields;

    if(!permission_id){
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "permission_id is required", {});
      return res.status(400).send(objResponse);
    }
      
    let checkpermission_id  = await listOne(permissions, { permission_id });

    // Nao permite exclusao caso já exista um registro com esse campo
    if (!checkpermission_id  || Object.keys(checkpermission_id ).length == 0) {
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "This permissions not found", {});
      return res.status(400).send(objResponse);
    }
    

  next();
}