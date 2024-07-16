export default {
    get: {
        "tags": [
            "wishlist_items"
        ],
        "parameters": [

         
            {
                "name": "wishlist_item_id",
                "in": "query",
                "type": "string",
            },
        
            {
                "name": "wishlist_id",
                "in": "query",
                "type": "string",
            },
        
            {
                "name": "product_id",
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
