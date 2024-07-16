export default {
    get: {
        "tags": [
            "permissions"
        ],
        "parameters": [

         
            {
                "name": "permission_id",
                "in": "query",
                "type": "string",
            },
        
            {
                "name": "permission_name",
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
