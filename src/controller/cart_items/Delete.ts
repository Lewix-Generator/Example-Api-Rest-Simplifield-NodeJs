/**
* Import modules
*/
import cart_items from "../../model/cart_items";
import { API_RESPONSE_STATUS, patternReponse } from "../../middleware/pattern/apiResponse";
import { listOne } from "../../middleware/pattern/dbMethods";

export default async (req, res) => {

  let objExcluir = await listOne( cart_items, req.fields )
  .catch(function(erro){

      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "CART_ITEMS DELETE ERROR", erro);
      return res.status(400).send(objResponse);

  });
  if(objExcluir.destroy()){
    /**
     * Build response success
     */
    
    let objResponse = patternReponse(API_RESPONSE_STATUS['success'], "CART_ITEMS DELETE SUCCESS", objExcluir);
    return res.send(objResponse);

  }else{

    /**
     * Build response error
     */
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "CART_ITEMS DELETE ERROR", objExcluir);
    return res.send(objResponse);
    
  }

}

