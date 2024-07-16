export default {
    post: {
        "tags": ["categories"],
        "parameters": [


             
        
        
        
                {
                    "name": "category_name",
                    "in": "formData",
                    "required": true
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
