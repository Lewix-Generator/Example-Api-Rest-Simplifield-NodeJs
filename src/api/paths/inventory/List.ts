export default {
    get: {
        "tags": [
            "inventory"
        ],
        "parameters": [

         
            {
                "name": "inventory_id",
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
                "name": "last_updated",
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
