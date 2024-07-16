export default {
    post: {
        "tags": ["inventory"],
        "parameters": [


             
        
        
        
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
        
        
                {
                    "name": "last_updated",
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
