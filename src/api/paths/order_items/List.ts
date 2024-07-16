export default {
    get: {
        "tags": [
            "order_items"
        ],
        "parameters": [

         
            {
                "name": "order_item_id",
                "in": "query",
                "type": "string",
            },
        
            {
                "name": "order_id",
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
        
            {
                "name": "price",
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
