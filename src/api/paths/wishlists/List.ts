export default {
    get: {
        "tags": [
            "wishlists"
        ],
        "parameters": [

         
            {
                "name": "wishlist_id",
                "in": "query",
                "type": "string",
            },
        
            {
                "name": "customer_id",
                "in": "query",
                "type": "string",
            },
        
            {
                "name": "created_at",
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
