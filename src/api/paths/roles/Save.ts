export default {
    post: {
        "tags": ["roles"],
        "parameters": [


             
        
        
        
                {
                    "name": "role_name",
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
