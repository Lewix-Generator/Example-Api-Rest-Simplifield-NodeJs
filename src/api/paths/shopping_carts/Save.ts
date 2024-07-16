export default {
    post: {
        "tags": ["shopping_carts"],
        "parameters": [


             
        
        
        
                {
                    "name": "customer_id",
                    "in": "formData",
                    "required": false
                },
        
        
                {
                    "name": "created_at",
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
