export default {
    post: {
        "tags": ["permissions"],
        "parameters": [


             
        
        
        
                {
                    "name": "permission_name",
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
