/**
* Import modules
*/
import shopping_carts from "../../model/shopping_carts";
import { API_RESPONSE_STATUS, patternReponse } from "../../middleware/pattern/apiResponse";
import { listOne } from "../../middleware/pattern/dbMethods";

export default async (req, res) => {

  let objExcluir = await listOne( shopping_carts, req.fields )
  .catch(function(erro){

      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "SHOPPING_CARTS DELETE ERROR", erro);
      return res.status(400).send(objResponse);

  });
  if(objExcluir.destroy()){
    /**
     * Build response success
     */
    
    let objResponse = patternReponse(API_RESPONSE_STATUS['success'], "SHOPPING_CARTS DELETE SUCCESS", objExcluir);
    return res.send(objResponse);

  }else{

    /**
     * Build response error
     */
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "SHOPPING_CARTS DELETE ERROR", objExcluir);
    return res.send(objResponse);
    
  }

}

