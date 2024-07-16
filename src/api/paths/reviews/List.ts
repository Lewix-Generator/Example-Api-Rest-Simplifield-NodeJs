export default {
    get: {
        "tags": [
            "reviews"
        ],
        "parameters": [

         
            {
                "name": "review_id",
                "in": "query",
                "type": "string",
            },
        
            {
                "name": "product_id",
                "in": "query",
                "type": "string",
            },
        
            {
                "name": "customer_id",
                "in": "query",
                "type": "string",
            },
        
            {
                "name": "review_date",
                "in": "query",
                "type": "string",
            },
        
            {
                "name": "rating",
                "in": "query",
                "type": "string",
            },
        
            {
                "name": "comment",
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
