/**
* Import modules
*/
import employees from "../../model/employees";
import { API_RESPONSE_STATUS, patternReponse } from "../../middleware/pattern/apiResponse";
import { listOne } from "../../middleware/pattern/dbMethods";

export default async (req, res) => {

  let objExcluir = await listOne( employees, req.fields )
  .catch(function(erro){

      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "EMPLOYEES DELETE ERROR", erro);
      return res.status(400).send(objResponse);

  });
  if(objExcluir.destroy()){
    /**
     * Build response success
     */
    
    let objResponse = patternReponse(API_RESPONSE_STATUS['success'], "EMPLOYEES DELETE SUCCESS", objExcluir);
    return res.send(objResponse);

  }else{

    /**
     * Build response error
     */
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "EMPLOYEES DELETE ERROR", objExcluir);
    return res.send(objResponse);
    
  }

}

