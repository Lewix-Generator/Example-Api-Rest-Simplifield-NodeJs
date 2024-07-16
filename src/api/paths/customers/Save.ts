export default {
    post: {
        "tags": ["customers"],
        "parameters": [


             
        
        
        
                {
                    "name": "first_name",
                    "in": "formData",
                    "required": true
                },
        
        
                {
                    "name": "last_name",
                    "in": "formData",
                    "required": true
                },
        
        
                {
                    "name": "email",
                    "in": "formData",
                    "required": true
                },
        
        
                {
                    "name": "phone",
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
