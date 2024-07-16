export default {
    post: {
        "tags": ["addresses"],
        "parameters": [


             
        
        
        
                {
                    "name": "customer_id",
                    "in": "formData",
                    "required": false
                },
        
        
                {
                    "name": "street",
                    "in": "formData",
                    "required": false
                },
        
        
                {
                    "name": "city",
                    "in": "formData",
                    "required": false
                },
        
        
                {
                    "name": "state",
                    "in": "formData",
                    "required": false
                },
        
        
                {
                    "name": "postal_code",
                    "in": "formData",
                    "required": false
                },
        
        
                {
                    "name": "country",
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
