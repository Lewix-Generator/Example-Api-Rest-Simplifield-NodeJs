export default {
    get: {
        "tags": [
            "cart_items"
        ],
        "parameters": [

         
            {
                "name": "cart_item_id",
                "in": "query",
                "type": "string",
            },
        
            {
                "name": "cart_id",
                "in": "query",
                "type": "string",
            },
        
            {
                "name": "product_id",
                "in": "query",
                "type": "string",
            },
        
            {
                "name": "quantity",
                "in": "query",
                "type": "string",
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
