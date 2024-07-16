export default {
    get: {
        "tags": [
            "roles"
        ],
        "parameters": [

         
            {
                "name": "role_id",
                "in": "query",
                "type": "string",
            },
        
            {
                "name": "role_name",
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
