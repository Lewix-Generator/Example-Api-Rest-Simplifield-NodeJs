export default {
    get: {
        "tags": [
            "customers"
        ],
        "parameters": [

         
            {
                "name": "customer_id",
                "in": "query",
                "type": "string",
            },
        
            {
                "name": "first_name",
                "in": "query",
                "type": "string",
            },
        
            {
                "name": "last_name",
                "in": "query",
                "type": "string",
            },
        
            {
                "name": "email",
                "in": "query",
                "type": "string",
            },
        
            {
                "name": "phone",
                "in": "query",
                "type": "string",
            },
        
            {
                "name": "created_at",
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
