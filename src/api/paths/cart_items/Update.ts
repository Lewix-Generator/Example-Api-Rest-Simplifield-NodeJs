export default {
        put:{
            "tags": [
              "cart_items"
            ],
            "parameters": [

             
                {
                    "name": "cart_item_id",
                    "in": "formData",
                    "required": true
                },
            
                {
                    "name": "cart_id",
                    "in": "formData",
                    "required": false
                },
            
                {
                    "name": "product_id",
                    "in": "formData",
                    "required": false
                },
            
                {
                    "name": "quantity",
                    "in": "formData",
                    "required": false
                },
             
                
            ],
            "responses": {
                "*": {
                    "schema": {
                        "type": "object",
                        "properties": {
                            "status": {
                                "type": "string",
                            },
                            "message": {
                                "type": "string"
                            },
                            "data": {
                                "type": "object"
                            }
                        }
                    }
                },
                "200": {},
                "400": {}
            },
    }
}
