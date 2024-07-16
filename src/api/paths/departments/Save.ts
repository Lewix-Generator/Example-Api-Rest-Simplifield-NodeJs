export default {
    post: {
        "tags": ["departments"],
        "parameters": [


             
        
        
        
                {
                    "name": "department_name",
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
